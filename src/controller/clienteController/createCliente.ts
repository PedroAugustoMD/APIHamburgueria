import { Request, Response } from "express";
import { PrismaClient} from "@prisma/client";
import { StatusCodes} from "http-status-codes";
import { CriandoCliente } from "../../usecases/clientes/createCliente";

export const prisma = new PrismaClient;

export class createClienteController{
    async handle(req: Request, res: Response){
        const {nome,email,senha,telefone} = req.body;
        try{
            if(await prisma.cliente.findUnique({where:{email:email}})){
                return res.status(StatusCodes.UNAUTHORIZED).send({error:"Cliente já existente"})
            }
            const create = new CriandoCliente();
            //criando cliente
            const cliente = await create.execute({nome,email,senha,telefone});
            
            return res.send({
                cliente,
            },);

        }catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro"})
        }
    }
}