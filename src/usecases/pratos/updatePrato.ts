import { PrismaClient, Prato } from "@prisma/client";
export const prisma = new PrismaClient()
import { typeMPrato } from "../../usecases/pratos/createPrato";


export class atualizarPrato{
    async execute({nome,ingredientes,valor}:typeMPrato): Promise<Prato>{
        const updatedPrato = await prisma.prato.update({
            where: {nome: nome},
            data:{
                ingredientes:ingredientes,
                valor:valor
            }
        })
        return updatedPrato
    }
}