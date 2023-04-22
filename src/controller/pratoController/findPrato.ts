import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { pesquisarPrato } from "../../usecases/pratos/findPrato";

export class findPratoController{
  async handle(req: Request, res: Response){
    const {nome} = req.params;

    try{
      const pesquisar = new pesquisarPrato();
      const prato = await pesquisar.execute(nome);

      if (prato === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Prato não encontrado"
        })
      } 


      return res.status(StatusCodes.OK).send({
        prato,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Erro ao pesquisar Prato"});
    }
  }
}