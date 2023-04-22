import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { listarPedidos } from "../../usecases/pedidos/listPedido";

export class listPedidoController{
  async handle(req: Request, res: Response){

    try{
      const listar = new listarPedidos();
      const pedidos = await listar.execute();

      if (pedidos === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Não existem pedidos cadastrados"
        })
      }
      return res.status(StatusCodes.OK).send({
        pedidos,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Erro ao listar pedidos"});
    }
  }
}