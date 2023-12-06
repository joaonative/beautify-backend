import express from "express";
import {
  criarProduto,
  editarProduto,
  deletarProduto,
  listarProdutoPorId,
  listarProdutos,
} from "../controllers/produtoController.js";

const router = express.Router();

router.get("/", listarProdutos);
router.post("/", criarProduto);
router.put("/", editarProduto);
router.get("/:id", listarProdutoPorId);
router.delete("/:id", deletarProduto);
