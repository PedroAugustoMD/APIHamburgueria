import { PrismaClient, Prato } from "@prisma/client";
export const prisma = new PrismaClient()


export class listarPratos {
  async execute():Promise<Prato[]>{

    return await prisma.prato.findMany({
      orderBy: {
        nome: "asc"
      }
    })
  }
}