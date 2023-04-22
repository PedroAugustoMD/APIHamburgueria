import { PrismaClient, Pedido } from "@prisma/client";
export const prisma = new PrismaClient()


export class pesquisarPedido {
  async execute(clienteEmail:string):Promise<Pedido[]>{

    return await prisma.pedido.findMany({
        where: {
            clienteEmail: clienteEmail,
        },
        orderBy: {
            data: "desc"
        }
      })
  }
}