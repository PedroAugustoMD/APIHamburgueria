import { Router } from "express";
import { Request, Response } from "express";
import { clienteRoutes } from "./cliente.routes";
import { pratoRoutes } from "./prato.routes";
import { pedidoRoutes } from "./pedido.routes";

const routes = Router();

routes.get("/", (req:Request, res:Response) => {return res.status(200).send({success:"Server ON and Connect!"})});
//Criando rota de clientes
routes.use("/cliente", clienteRoutes);
//Criando rota de pratos
routes.use("/prato", pratoRoutes);
//Criando rota de pedidos
routes.use("/pedido", pedidoRoutes);
export { routes };