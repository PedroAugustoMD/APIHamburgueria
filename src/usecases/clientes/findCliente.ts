import { PrismaClient, Cliente } from "@prisma/client";
export const prisma = new PrismaClient()


export class pesquisarCliente {
  async execute(email:string):Promise<Cliente | null>{

    return await prisma.cliente.findUnique({
        where: {
          email: email,
        },
      })
  }
}