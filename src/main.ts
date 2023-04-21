
import bodyParser from "body-parser";
import express from "express";
import { routes } from "./routes";
const cors = require('cors');

//criando aplicacao express
const app = express();

//utilizando o bodyparse
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//setando rotas
app.use(routes);
//utilizando o cors
app.use(cors())
app.listen(3000, () => console.log("Server is running in port 3000!"))