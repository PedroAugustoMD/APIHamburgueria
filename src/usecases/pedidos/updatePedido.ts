import { PrismaClient, Pedido } from "@prisma/client";
export const prisma = new PrismaClient()
import { typeMPedido } from "../../usecases/pedidos/createPedido";


export class atualizarPedido{
    async execute(id:number, {clienteEmail, total}:typeMPedido): Promise<Pedido>{
        const updatedPedido = await prisma.pedido.update({
            where: {id: id},
            data:{
                clienteEmail: clienteEmail,
                total:total
            }
        })
        return updatedPedido
    }
}