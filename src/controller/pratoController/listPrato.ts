import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { listarPratos } from "../../usecases/pratos/listPrato";

export class listPratoController{
  async handle(req: Request, res: Response){

    try{
      const listar = new listarPratos();
      const pratos = await listar.execute();

      if (pratos === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Não existem pratos cadastrados"
        })
      }
      return res.status(StatusCodes.OK).send({
       pratos,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Erro ao listar pratos"});
    }
  }
}