import { Router } from "express";
import { createPratoController  } from "../controller/pratoController/createPrato";
import { listPratoController  } from "../controller/pratoController/listPrato";
//import { findClienteController  } from "../controller/clienteController/findCliente";
//import { updateClienteController  } from "../controller/clienteController/updateCliente";
//import { deleteClienteController  } from "../controller/clienteController/deleteCliente";

const pratoRoutes = Router();

const createItem = new createPratoController();
const listItem = new listPratoController();
//const findClient = new findClienteController();
//const updateClient = new updateClienteController();
//const deleteClient = new deleteClienteController();

pratoRoutes.post("/create", createItem.handle);
pratoRoutes.get("/list", listItem.handle);
//clienteRoutes.get("/find/:email", findClient.handle);
//clienteRoutes.put("/update/:email", updateClient.handle);
//clienteRoutes.delete("/delete/:email", deleteClient.handle);


export{pratoRoutes};