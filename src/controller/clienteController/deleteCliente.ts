import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { pesquisarCliente } from "../../usecases/clientes/findCliente";
import { deletarCliente } from "../../usecases/clientes/deleteCliente";


export class deleteClienteController{
  async handle(req: Request, res: Response){
    const {email} = req.params; 

    try{
      const pesquisar = new pesquisarCliente();
      const pesquisaCliente = await pesquisar.execute(email);

      if (pesquisaCliente === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Cliente não encontrado"
        })
      } 

      const deleteCliente = new deletarCliente();
      const cliente = await deleteCliente.execute(email);

      return res.send({
        cliente,
        message: "Usuário deletado"
    },);

    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Erro ao deletar Cliente"});
    }
  }
}