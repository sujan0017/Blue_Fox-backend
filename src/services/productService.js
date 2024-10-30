import Product from "../models/Product.js";

const createProduct = async (data) => {
  await Product.create(data);
};
const getProductById = async (id) => {
  await Product.findById(id);
};
const getAllProducts = async (data) => {
  await Product.find(data);
};
const deleteProduct = async (id) => {
  await Product.findByIdAndDelete(id);
}

export default {
  createProduct,
  getProductById,
  getAllProducts,
  deleteProduct,
};
