import { Router } from "express";
import { createPratoController  } from "../controller/pratoController/createPrato";
import { listPratoController  } from "../controller/pratoController/listPrato";
import { findPratoController  } from "../controller/pratoController/findPrato";
import { updatePratoController  } from "../controller/pratoController/updatePrato";
//import { deleteClienteController  } from "../controller/clienteController/deleteCliente";

const pratoRoutes = Router();

const createItem = new createPratoController();
const listItem = new listPratoController();
const findPrato = new findPratoController();
const updatePrato = new updatePratoController();
//const deleteClient = new deleteClienteController();

pratoRoutes.post("/create", createItem.handle);
pratoRoutes.get("/list", listItem.handle);
pratoRoutes.get("/find/:nome", findPrato.handle);
pratoRoutes.put("/update/:nome", updatePrato.handle);
//clienteRoutes.delete("/delete/:email", deleteClient.handle);


export{pratoRoutes};