const productsDb = require("../db/products");
const categoriesDb = require("../db/categories");

const getProducts = async (req, res) => {
  try {
    const products = await productsDb.getProducts();
    res.status(200).render("index", { products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductForm = async (req, res) => {
  try {
    const categories = await categoriesDb.getCategories();
    res.status(200).render("addProductForm", { categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUpdateProductForm = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productsDb.getProduct(id);
    const categories = await categoriesDb.getCategories();
    res.status(200).render("updateProductForm", {
      product: product[0],
      categories: categories,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    let product = req.body;
    product.price = Number(product.price);
    product.stock_quantity = Number(product.stock_quantity);
    product.category_id = Number(product.category_id);

    //  Add the product to the database
    await productsDb.addProduct(product);
    res.status(200).redirect("/products");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    let product = req.body;
    product.price = Number(product.price);
    product.stock_quantity = Number(product.stock_quantity);
    product.category_id = Number(product.category_id);

    //  update the product on the database
    await productsDb.updateProduct(product);

    res.status(200).redirect("/products");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await productsDb.deleteProduct(id);
    res.status(200).redirect("/");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProducts,
  getProductForm,
  addProduct,
  getUpdateProductForm,
  updateProduct,
  deleteProduct,
};
