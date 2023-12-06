import mongoose, { mongo } from "mongoose";

const EsquemaProduto = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export const Produto =
  mongoose.models.Produto || mongoose.model("Produto", EsquemaProduto);
