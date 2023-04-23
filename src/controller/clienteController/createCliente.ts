import { Request, Response } from "express";
import { PrismaClient} from "@prisma/client";
import { StatusCodes} from "http-status-codes";
import { CriandoCliente } from "../../usecases/clientes/createCliente";

import bcrypt from 'bcrypt';

const jwt = require('jsonwebtoken');
const authConfig = require("../../config/auth");

export const prisma = new PrismaClient;

export class createClienteController{
    async handle(req: Request, res: Response){
        const {nome,email,senha,telefone} = req.body;
        try{
            if(await prisma.cliente.findUnique({where:{email:email}})){
                return res.status(StatusCodes.UNAUTHORIZED).send({error:"Cliente já existente"})
            }
            const create = new CriandoCliente();
            const senhaCript = await bcrypt.hash(senha, 10);
            //criando cliente
            const cliente = await create.execute({nome,email,senhaCript,telefone});

            const token = jwt.sign({email:cliente.email}, authConfig.secret, {
                expiresIn: 86400,
            })
            
            return res.send({
                cliente,
                token
            },);

        }catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro"})
        }
    }
}