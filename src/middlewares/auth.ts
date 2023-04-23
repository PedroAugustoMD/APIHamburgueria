import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const jwt = require('jsonwebtoken');
const authConfig = require("../config/auth");

export class AuthMiddleware{
  async execute(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization;
    
    if (!authHeader){
      return res.status(StatusCodes.UNAUTHORIZED).send({error: "Token não foi fornecido"})
    }

    const parts = authHeader.split(' ');
    
    if(!(parts.length === 2)){
      return res.status(StatusCodes.UNAUTHORIZED).send({error: "Erro no token"})
    }

    const [ scheme, token ] = parts;

    if (!/^Bearer$/i.test(scheme)){
      return res.status(StatusCodes.UNAUTHORIZED).send({error: "Token mal formatado"})
    }

    jwt.verify(token, authConfig.secret, (err:any, decoded:any) => {
      if (err) {
        return res.status(StatusCodes.UNAUTHORIZED).send({error: "Token inválido"})
      }

      req.body.email = decoded.email;
    })

    return next();
  }
}