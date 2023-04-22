import { Request, Response } from "express";
import { PrismaClient} from "@prisma/client";
import { StatusCodes} from "http-status-codes";
import { CriandoPedido } from "../../usecases/pedidos/createPedido";

export const prisma = new PrismaClient;

export class createPedidoController{
    async handle(req: Request, res: Response){
        const {clienteEmail,total} = req.body;
        try{
            const cliente = await prisma.cliente.findUnique({
                where:{
                    email: clienteEmail,
                },
            });
    
    
            if(cliente === null){
                return res.status(StatusCodes.UNAUTHORIZED).send({error:"Cliente não encontrado"}) 
            }
            const create = new CriandoPedido();
            //criando prato
            const pedido = await create.execute({clienteEmail,total});
            
            return res.send({
                pedido,
            },);
            
        }catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro"})
        }
    }
}