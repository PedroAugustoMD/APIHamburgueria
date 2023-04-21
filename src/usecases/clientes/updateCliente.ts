import { PrismaClient, Cliente } from "@prisma/client";
export const prisma = new PrismaClient()

export interface typeMCliente{
    nome: string
    email: string
    senha: string
    telefone: string

}

export class atualizarCliente{
    async execute({nome,email,senha,telefone}:typeMCliente): Promise<Cliente>{
        const updatedCliente = await prisma.cliente.update({
            where: {email: email},
            data:{
                nome:nome,
                senha:senha,
                telefone:telefone
            }
        })
        return updatedCliente
    }
}