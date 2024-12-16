const db = require("../db/products");

const getProducts = async (req, res) => {
  try {
    const products = await db.getProducts();
    res.status(200).render("index", { products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getProducts };