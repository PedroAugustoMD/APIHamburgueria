import { Router } from "express";
import { createPedidoController  } from "../controller/pedidoController/createPedido";
import { listPedidoController  } from "../controller/pedidoController/listPedido";
import { findPedidoController  } from "../controller/pedidoController/findPedido";
import { updatePedidoController  } from "../controller/pedidoController/updatePedido";
import { deletePedidoController  } from "../controller/pedidoController/deletePedido";

const pedidoRoutes = Router();

const createPedido = new createPedidoController();
const listPedido = new listPedidoController();
const findPedido = new findPedidoController();
const updatePedido = new updatePedidoController();
const deletePedido = new deletePedidoController();

pedidoRoutes.post("/create", createPedido.handle);
pedidoRoutes.get("/list", listPedido.handle);
pedidoRoutes.get("/find/:clienteEmail", findPedido.handle);
pedidoRoutes.put("/update/:id", updatePedido.handle);
pedidoRoutes.delete("/delete/:id", deletePedido.handle);


export{pedidoRoutes};