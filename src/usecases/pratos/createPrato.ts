import { PrismaClient, Prato } from "@prisma/client";
export const prisma = new PrismaClient()

export interface typeMPrato{
    nome: string
    ingredientes: string
    valor: number

}

export class CriandoPrato{
    async execute({nome,ingredientes,valor}:typeMPrato): Promise<Prato>{
        const novoPrato = await prisma.prato.create({
            data:{
                nome:nome,
                ingredientes:ingredientes,
                valor:valor
            }
        })
        return novoPrato
    }
}