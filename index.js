import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import rotaProduto from "./routes/produto.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const PORTA = process.env.PORTA || 6969;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("BD CONECTADO");

    app.use("/produto", rotaProduto);

    app.listen(PORTA, () => {
      console.log(`RODANDO NA PORTA ${PORTA}`);
    });
  })
  .catch((erro) => {
    console.error(erro);
  });
