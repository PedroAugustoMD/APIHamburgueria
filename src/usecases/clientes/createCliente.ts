import { PrismaClient, Cliente } from "@prisma/client";
export const prisma = new PrismaClient()

export interface typeMCliente{
    nome: string
    email: string
    senha: string
    telefone: string

}

export class CriandoCliente{
    async execute({nome,email,senha,telefone}:typeMCliente): Promise<Cliente>{
        const novoCliente = await prisma.cliente.create({
            data:{
                nome:nome,
                email:email,
                senha:senha,
                telefone:telefone
            }
        })
        return novoCliente
    }
}