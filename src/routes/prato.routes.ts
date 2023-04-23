import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth";
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

const authMiddleware = new AuthMiddleware();
pratoRoutes.use(authMiddleware.execute);

pratoRoutes.post("/create", createItem.handle);
pratoRoutes.get("/list", listItem.handle);
pratoRoutes.get("/find/:nome", findItem.handle);
pratoRoutes.put("/update/:nome", updateItem.handle);
pratoRoutes.delete("/delete/:nome", deleteItem.handle);


export{pratoRoutes};