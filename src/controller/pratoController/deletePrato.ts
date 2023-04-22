import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { pesquisarPrato } from "../../usecases/pratos/findPrato";
import { deletarPrato } from "../../usecases/pratos/deletePrato";


export class deletePratoController{
  async handle(req: Request, res: Response){
    const {nome} = req.params; 

    try{
      const pesquisar = new pesquisarPrato();
      const pesquisaPrato = await pesquisar.execute(nome);

      if (pesquisaPrato === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Prato não encontrado"
        })
      } 

      const deletePrato = new deletarPrato();
      const prato = await deletePrato.execute(nome);

      return res.send({
        prato,
        message: "Prato deletado"
    },);

    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Erro ao deletar Prato"});
    }
  }
}