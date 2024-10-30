import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
} from "../controller/productController.js";

const router = express.Router();

router.post("/", createProduct);

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.delete("/:id", deleteProduct);

export default router;
