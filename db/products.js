const pool = require("./pool");

const getProducts = async () => {
  const query = "SELECT * FROM products";
  const { rows } = await pool.query(query);
  return rows;
};

module.exports = { getProducts };
