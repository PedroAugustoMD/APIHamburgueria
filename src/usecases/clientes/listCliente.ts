import { PrismaClient, Cliente } from "@prisma/client";
export const prisma = new PrismaClient()


export class listarClientes {
  async execute():Promise<Cliente[]>{

    return await prisma.cliente.findMany({
      orderBy: {
        nome: "asc"
      }
    })
  }
}