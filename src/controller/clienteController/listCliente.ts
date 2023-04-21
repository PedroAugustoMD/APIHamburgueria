import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { listarClientes } from "../../usecases/clientes/listCliente";

export class listClienteController{
  async handle(req: Request, res: Response){

    try{
      const listar = new listarClientes();
      const clientes = await listar.execute();

      if (clientes === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Não existem clientes cadastrados"
        })
      }
      return res.status(StatusCodes.OK).send({
       clientes,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Erro ao listar Clientes"});
    }
  }
}