import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { pesquisarCliente } from "../../usecases/clientes/findCliente";

export class findClienteController{
  async handle(req: Request, res: Response){
    const {email} = req.params;

    try{
      const pesquisar = new pesquisarCliente();
      const cliente = await pesquisar.execute(email);

      if (cliente === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Cliente não encontrado"
        })
      } 


      return res.status(StatusCodes.OK).send({
       cliente,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Erro ao pesquisar Cliente"});
    }
  }
}