import { PrismaClient, Cliente } from "@prisma/client";
export const prisma = new PrismaClient()
import { typeMCliente } from "../../usecases/clientes/createCliente";


export class atualizarCliente{
    async execute({nome,email,senhaCript,telefone}:typeMCliente): Promise<Cliente>{
        const updatedCliente = await prisma.cliente.update({
            where: {email: email},
            data:{
                nome:nome,
                senha:senhaCript,
                telefone:telefone
            }
        })
        return updatedCliente
    }
}