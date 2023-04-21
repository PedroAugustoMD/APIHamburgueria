import { Router } from "express";
import { createClienteController } from "../controller/clienteController/createCliente";
const clienteRoutes = Router();

const createClient = new createClienteController();
clienteRoutes.post("/create", createClient.handle);

export{clienteRoutes};