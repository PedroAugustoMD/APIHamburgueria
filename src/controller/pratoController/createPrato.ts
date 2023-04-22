import { Request, Response } from "express";
import { PrismaClient} from "@prisma/client";
import { StatusCodes} from "http-status-codes";
import { CriandoPrato } from "../../usecases/pratos/createPrato";

export const prisma = new PrismaClient;

export class createPratoController{
    async handle(req: Request, res: Response){
        const {nome,ingredientes,valor} = req.body;
        try{
            if(await prisma.prato.findUnique({where:{nome:nome}})){
                return res.status(StatusCodes.UNAUTHORIZED).send({error:"Prato já existente"})
            }
            const create = new CriandoPrato();
            //criando prato
            const prato = await create.execute({nome,ingredientes,valor});
            
            return res.send({
                prato,
            },);
            
        }catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro"})
        }
    }
}