const db = require("../db/categories");

const getCategories = async (req, res) => {
  try {
    const categories = await db.getCategories();
    res.status(200).render("categories", { categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategoriesForm = async (req, res) => {
  try {
    res.status(200).render("addCategoryForm");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUpdateCategoryForm = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await db.getCategory(id);
    res.status(200).render("updateCategoryForm", { category: category[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addCategory = async (req, res) => {
  try {
    const category = req.body;
    await db.addCategory(category);
    res.status(200).redirect("/categories");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = req.body;
    await db.updateCategory(category);
    res.status(200).redirect("/categories");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    await db.deleteCategory(id);
    res.status(200).redirect("/categories");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCategories,
  getCategoriesForm,
  getUpdateCategoryForm,
  addCategory,
  updateCategory,
  deleteCategory,
};
