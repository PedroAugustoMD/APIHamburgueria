import { PrismaClient, Prato } from "@prisma/client";
export const prisma = new PrismaClient()


export class pesquisarPrato {
  async execute(nome:string):Promise<Prato | null>{

    return await prisma.prato.findUnique({
        where: {
          nome: nome,
        },
      })
  }
}