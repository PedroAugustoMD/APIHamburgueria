import { Router } from "express";
import { createClienteController  } from "../controller/clienteController/createCliente";
import { listClienteController  } from "../controller/clienteController/listCliente";
import { findClienteController  } from "../controller/clienteController/findCliente";

const clienteRoutes = Router();

const createClient = new createClienteController();
const listClient = new listClienteController();
const findClient = new findClienteController();

clienteRoutes.post("/create", createClient.handle);
clienteRoutes.get("/list", listClient.handle);
clienteRoutes.get("/find/:email", findClient.handle);

export{clienteRoutes};