import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { atualizarPedido } from "../../usecases/pedidos/updatePedido";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient()


export class updatePedidoController{
  async handle(req: Request, res: Response){
    const {id} = req.params;
    const {clienteEmail, total} = req.body;

    try{
      const pesquisaPedido = await prisma.pedido.findUnique({
        where: {
            id: Number(id)
        },
      })

      if (pesquisaPedido === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Pedido não encontrado"
        })
      } 

      const update = new atualizarPedido();
      const pedido = await update.execute(Number(id), {clienteEmail, total});

      return res.send({
        pedido,
    },);

    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Erro ao atualizar pedido"});
    }
  }
}