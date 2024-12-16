const db = require("../db/categories");

const getCategories = async (req, res) => {
  try {
    const categories = await db.getCategories();
    res.status(200).render("index");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getCategories };
