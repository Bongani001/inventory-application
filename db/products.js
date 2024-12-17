const pool = require("./pool");

const getProducts = async () => {
  const query = "SELECT * FROM products ORDER BY id";
  const { rows } = await pool.query(query);
  return rows;
};

const getProduct = async (id) => {
  const query = "SELECT * FROM products WHERE id = $1";
  const value = [id];
  const { rows } = await pool.query(query, value);
  return rows;
};

const addProduct = async (product) => {
  const { name, price, stock_quantity, category_id, description } = product;
  const query =
    "INSERT INTO products (name, price, stock_quantity, category_id, description) VALUES ($1, $2, $3, $4, $5)";
  const values = [name, price, stock_quantity, category_id, description];
  await pool.query(query, values);
};

const updateProduct = async (product) => {
  const { name, price, stock_quantity, category_id, description, id } = product;
  const query =
    "UPDATE products SET name = $1, price = $2, stock_quantity = $3, category_id = $4, description = $5 WHERE id = $6";
  const values = [name, price, stock_quantity, category_id, description, id];
  await pool.query(query, values);
};

const deleteProduct = async (id) => {
  await pool.query("DELETE FROM products WHERE id = $1", [id]);
};

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
