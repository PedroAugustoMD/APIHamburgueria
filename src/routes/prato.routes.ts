import { Router } from "express";
import { createPratoController  } from "../controller/pratoController/createPrato";
import { listPratoController  } from "../controller/pratoController/listPrato";
import { findPratoController  } from "../controller/pratoController/findPrato";
//import { updateClienteController  } from "../controller/clienteController/updateCliente";
//import { deleteClienteController  } from "../controller/clienteController/deleteCliente";

const pratoRoutes = Router();

const createItem = new createPratoController();
const listItem = new listPratoController();
const findPrato = new findPratoController();
//const updateClient = new updateClienteController();
//const deleteClient = new deleteClienteController();

pratoRoutes.post("/create", createItem.handle);
pratoRoutes.get("/list", listItem.handle);
pratoRoutes.get("/find/:nome", findPrato.handle);
//clienteRoutes.put("/update/:email", updateClient.handle);
//clienteRoutes.delete("/delete/:email", deleteClient.handle);


export{pratoRoutes};