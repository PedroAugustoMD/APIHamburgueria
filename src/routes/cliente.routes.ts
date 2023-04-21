import { Router } from "express";
import { createClienteController  } from "../controller/clienteController/createCliente";
import { listClienteController  } from "../controller/clienteController/listCliente";
import { findClienteController  } from "../controller/clienteController/findCliente";
import { updateClienteController  } from "../controller/clienteController/updateCliente";
import { deleteClienteController  } from "../controller/clienteController/deleteCliente";

const clienteRoutes = Router();

const createClient = new createClienteController();
const listClient = new listClienteController();
const findClient = new findClienteController();
const updateClient = new updateClienteController();
const deleteClient = new deleteClienteController();

clienteRoutes.post("/create", createClient.handle);
clienteRoutes.get("/list", listClient.handle);
clienteRoutes.get("/find/:email", findClient.handle);
clienteRoutes.put("/update/:email", updateClient.handle);
clienteRoutes.delete("/delete/:email", deleteClient.handle);


export{clienteRoutes};