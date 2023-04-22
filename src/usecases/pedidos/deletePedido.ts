import { PrismaClient, Pedido } from "@prisma/client";
export const prisma = new PrismaClient()


export class deletarPedido {
  async execute(id:number):Promise<Pedido | null>{

    return await prisma.pedido.delete({
        where: {
          id: id,
        },
      })
  }
}