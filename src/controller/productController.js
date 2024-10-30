 import productServices from '../services/productService.js'

const createProduct = async (req, res) => {
  const data = req.body;

  if (!data.name) return res.status(422).send("Product name is required.");
  if (!data.price) return res.status(422).send("Product price is required.");

  try {
    const products = await productServices.createProduct(data);

    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getProductById = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await productServices.getProductById(id);

    if (!product) return res.status(404).send("Product not found.");

    res.json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllProducts = async (req, res) => {
  const data = req.body;
  try {
    const products = await productServices.getAllProducts(data);

    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const products = await productServices.getProductById(id);

    if (!products) return res.status(404).send("Product not found.");

    await productServices.deleteProduct();

    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { createProduct, getAllProducts, getProductById, deleteProduct };
