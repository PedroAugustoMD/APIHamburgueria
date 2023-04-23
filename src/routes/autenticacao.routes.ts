import { Router } from "express";
import { autenticacaoController } from "../controller/autenticacao/autenticacaoController";


const autController = new autenticacaoController();

const autenticacaoRoutes = Router();

autenticacaoRoutes.post("/login", autController.handle);

export {autenticacaoRoutes};