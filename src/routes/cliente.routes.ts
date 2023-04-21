import { Router } from "express";
import { createClienteController  } from "../controller/clienteController/createCliente";
import { listClienteController  } from "../controller/clienteController/listCliente";

const clienteRoutes = Router();

const createClient = new createClienteController();
const listClient = new listClienteController();
clienteRoutes.post("/create", createClient.handle);
clienteRoutes.get("/list", listClient.handle);

export{clienteRoutes};