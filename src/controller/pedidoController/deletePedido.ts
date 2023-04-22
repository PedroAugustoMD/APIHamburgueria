import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { deletarPedido } from "../../usecases/pedidos/deletePedido";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient()


export class deletePedidoController{
  async handle(req: Request, res: Response){
    const {id} = req.params; 

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

        const deletePedido = new deletarPedido();
        const pedido = await deletePedido.execute(Number(id));

        return res.send({
            pedido,
            message: "Pedido deletado"
        },);

    } catch (err){
        return res.status(StatusCodes.BAD_REQUEST).send({error: "Erro ao deletar pedido"});
    }
  }
}