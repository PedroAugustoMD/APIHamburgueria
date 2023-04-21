import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { pesquisarPrato } from "../../usecases/pratos/findPrato";
import { atualizarPrato } from "../../usecases/pratos/updatePrato";


export class updatePratoController{
  async handle(req: Request, res: Response){
    const {nome} = req.params;
    const {ingredientes,valor} = req.body;

    try{
      const pesquisar = new pesquisarPrato();
      const pesquisaPrato = await pesquisar.execute(nome);

      if (pesquisaPrato === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Prato não encontrado"
        })
      } 

      const update = new atualizarPrato();
      const prato = await update.execute({nome,ingredientes,valor});

      return res.send({
        prato,
    },);

    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Erro ao atualizar Cliente"});
    }
  }
}