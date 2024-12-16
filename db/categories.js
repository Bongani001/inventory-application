const pool = require("./pool");

const getCategories = async () => {
  const query = "SELECT * FROM categories";
  const { rows } = await pool.query(query);
  return rows;
};

module.exports = { getCategories };
