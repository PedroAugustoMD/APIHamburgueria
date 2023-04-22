import { PrismaClient, Pedido } from "@prisma/client";
export const prisma = new PrismaClient()


export class listarPedidos {
  async execute():Promise<Pedido[]>{

    return await prisma.pedido.findMany({
      orderBy: {
        data: "desc"
      }
    })
  }
}