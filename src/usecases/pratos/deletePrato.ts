import { PrismaClient, Prato } from "@prisma/client";
export const prisma = new PrismaClient()


export class deletarPrato {
  async execute(nome:string):Promise<Prato | null>{

    return await prisma.prato.delete({
        where: {
          nome: nome,
        },
      })
  }
}