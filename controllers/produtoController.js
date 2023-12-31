import mongoose from "mongoose";
import { Produto } from "../models/produto.js";

export async function listarProdutos(req, res) {
  try {
    const todosOsProdutos = await Produto.find();

    res.json(todosOsProdutos);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao encontrar todos os produtos" });
  }
}

export async function listarProdutoPorMarca(req, res) {
  try {
    const { brand } = req.params;
    const produtos = await Produto.find({ brand });

    res.json(produtos);
  } catch (erro) {
    console.error(erro);
    res
      .status(500)
      .json({ erro: `Erro ao encontrar produtos da marca ${marca}` });
  }
}

export async function listarProdutoPorId(req, res) {
  try {
    const idProduto = req.params.id;

    const produtoEncontrado = await Produto.findById(idProduto);

    res.json(produtoEncontrado);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao encontrar produto" });
  }
}

export async function criarProduto(req, res) {
  try {
    const body = req.body;

    const produtoCriado = await Produto.create(body);

    res.json(produtoCriado);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao criar produto" });
  }
}

export async function editarProduto(req, res) {
  try {
    const body = req.body;
    const idProduto = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(idProduto)) {
      return res.status(400).json({ error: "ID do produto é inválido" });
    }

    const produtoAtualiazado = await Produto.findByIdAndUpdate(
      idProduto,
      body,
      {
        new: true,
      }
    );

    if (!produtoAtualiazado) {
      return res.status(404).json({ error: "O produto não foi localizado" });
    }

    res.json(produtoAtualiazado);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao editar produto" });
  }
}

export async function deletarProduto(req, res) {
  try {
    const idProduto = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(idProduto)) {
      return res.status(400).json({ error: "ID do produto é inválido" });
    }

    const produtoDeletado = await Produto.findByIdAndDelete(idProduto);

    res.status(204).send();
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: "Erro ao deletar produto" });
  }
}
