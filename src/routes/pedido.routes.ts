import { Router } from "express";
import { createPedidoController  } from "../controller/pedidoController/createPedido";
import { listPedidoController  } from "../controller/pedidoController/listPedido";
import { findPedidoController  } from "../controller/pedidoController/findPedido";
//import { updatePratoController  } from "../controller/pratoController/updatePrato";
//import { deletePratoController  } from "../controller/pratoController/deletePrato";

const pedidoRoutes = Router();

const createPedido = new createPedidoController();
const listPedido = new listPedidoController();
const findPedido = new findPedidoController();
//const updateItem = new updatePratoController();
//const deleteItem = new deletePratoController();

pedidoRoutes.post("/create", createPedido.handle);
pedidoRoutes.get("/list", listPedido.handle);
pedidoRoutes.get("/find/:clienteEmail", findPedido.handle);
//pratoRoutes.put("/update/:nome", updateItem.handle);
//pratoRoutes.delete("/delete/:nome", deleteItem.handle);


export{pedidoRoutes};