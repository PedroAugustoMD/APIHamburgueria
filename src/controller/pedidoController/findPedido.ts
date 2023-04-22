import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { pesquisarPedido } from "../../usecases/pedidos/findPedido";

export class findPedidoController{
  async handle(req: Request, res: Response){
    const {clienteEmail} = req.params;

    try{
      const pesquisar = new pesquisarPedido();
      const pedidos = await pesquisar.execute(clienteEmail);

      if (pedidos === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Não existem pedidos cadastrados"
        })
      } 


      return res.status(StatusCodes.OK).send({
        pedidos,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Erro ao pesquisar Pedidos"});
    }
  }
}