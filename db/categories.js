const pool = require("./pool");

const getCategories = async () => {
  const query = "SELECT * FROM categories ORDER BY id";
  const { rows } = await pool.query(query);
  return rows;
};

const getCategory = async (id) => {
  const query = "SELECT * FROM categories WHERE id = $1";
  const value = [id];
  const { rows } = await pool.query(query, value);
  return rows;
};

const addCategory = async (category) => {
  const { name } = category;
  const query = "INSERT INTO categories (name) VALUES ($1)";
  const values = [name];
  await pool.query(query, values);
};

const updateCategory = async (category) => {
  const { name, id } = category;
  const query = "UPDATE categories SET name = $1 WHERE id = $2";
  const values = [name, id];
  await pool.query(query, values);
};

const deleteCategory = async (id) => {
  await pool.query("DELETE FROM categories WHERE id = $1", [id]);
};

module.exports = {
  getCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
};
