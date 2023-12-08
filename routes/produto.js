import express from "express";
import {
  criarProduto,
  editarProduto,
  deletarProduto,
  listarProdutoPorId,
  listarProdutos,
  listarProdutoPorMarca,
} from "../controllers/produtoController.js";

const router = express.Router();

router.get("/", listarProdutos);
router.get("/:marca", listarProdutoPorMarca);
router.post("/", criarProduto);
router.put("/", editarProduto);
router.get("/:id", listarProdutoPorId);
router.delete("/:id", deletarProduto);

export default router;
