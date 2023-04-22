import { PrismaClient, Pedido } from "@prisma/client";
export const prisma = new PrismaClient()


export interface typeMPedido{
    clienteEmail: string
    total: number

}

export class CriandoPedido{
    async execute({clienteEmail,total}:typeMPedido): Promise<Pedido>{
        const novoPedido = await prisma.pedido.create({
            data:{
                clienteEmail:clienteEmail,
                total:total,

            }
        })
        return novoPedido
    }
}