import { Router } from "express";
import { createPedidoController  } from "../controller/pedidoController/createPedido";
//import { listPratoController  } from "../controller/pratoController/listPrato";
//import { findPratoController  } from "../controller/pratoController/findPrato";
//import { updatePratoController  } from "../controller/pratoController/updatePrato";
//import { deletePratoController  } from "../controller/pratoController/deletePrato";

const pedidoRoutes = Router();

const createPedido = new createPedidoController();
//const listItem = new listPratoController();
//const findItem = new findPratoController();
//const updateItem = new updatePratoController();
//const deleteItem = new deletePratoController();

pedidoRoutes.post("/create", createPedido.handle);
//pratoRoutes.get("/list", listItem.handle);
//pratoRoutes.get("/find/:nome", findItem.handle);
//pratoRoutes.put("/update/:nome", updateItem.handle);
//pratoRoutes.delete("/delete/:nome", deleteItem.handle);


export{pedidoRoutes};