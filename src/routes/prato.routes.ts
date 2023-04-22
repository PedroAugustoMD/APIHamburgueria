import { Router } from "express";
import { createPratoController  } from "../controller/pratoController/createPrato";
import { listPratoController  } from "../controller/pratoController/listPrato";
import { findPratoController  } from "../controller/pratoController/findPrato";
import { updatePratoController  } from "../controller/pratoController/updatePrato";
import { deletePratoController  } from "../controller/pratoController/deletePrato";

const pratoRoutes = Router();

const createItem = new createPratoController();
const listItem = new listPratoController();
const findItem = new findPratoController();
const updateItem = new updatePratoController();
const deleteItem = new deletePratoController();

pratoRoutes.post("/create", createItem.handle);
pratoRoutes.get("/list", listItem.handle);
pratoRoutes.get("/find/:nome", findItem.handle);
pratoRoutes.put("/update/:nome", updateItem.handle);
pratoRoutes.delete("/delete/:nome", deleteItem.handle);


export{pratoRoutes};