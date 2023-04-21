import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { pesquisarCliente } from "../../usecases/clientes/findCliente";
import { atualizarCliente } from "../../usecases/clientes/updateCliente";


export class updateClienteController{
  async handle(req: Request, res: Response){
    const {email} = req.params;
    const {nome,senha,telefone} = req.body;

    try{
      const pesquisar = new pesquisarCliente();
      const pesquisaCliente = await pesquisar.execute(email);

      if (pesquisaCliente === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Cliente não encontrado"
        })
      } 

      const update = new atualizarCliente();
      const cliente = await update.execute({nome,email,senha,telefone});

      return res.send({
        cliente,
    },);

    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Erro ao atualizar Cliente"});
    }
  }
}