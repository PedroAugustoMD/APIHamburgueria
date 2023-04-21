import { PrismaClient, Cliente } from "@prisma/client";
export const prisma = new PrismaClient()


export class deletarCliente {
  async execute(email:string):Promise<Cliente | null>{

    return await prisma.cliente.delete({
        where: {
          email: email,
        },
      })
  }
}