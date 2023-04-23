import { Request, Response } from "express";
import { PrismaClient} from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import bcrypt from 'bcrypt';

const jwt = require('jsonwebtoken');

export const prisma = new PrismaClient;

const authConfig = require("../../config/auth");

export class autenticacaoController{
    async handle(req: Request, res: Response){
        const {email, senha} = req.body;

        try {
            const cliente = await prisma.cliente.findUnique({
                where:{
                    email: email
                }
            });

            if(cliente === null){
                return res.status(StatusCodes.NOT_FOUND).send({
                    message: "Cliente não encontrado"
                })
            }

            const testeSenha = await bcrypt.compare(senha, cliente.senha)

            if(!testeSenha){
                return res.status(StatusCodes.UNAUTHORIZED).send({
                    error: "Senha incorreta"
                })
            }


            const token = jwt.sign({email:cliente.email}, authConfig.secret, {
                expiresIn: 86400,
            })

            return res.status(200).json({
                token,
                cliente
            })
        } catch (err){
            return res.status(StatusCodes.BAD_REQUEST).send({error: "Erro na autenticação"});
          }
    }
}