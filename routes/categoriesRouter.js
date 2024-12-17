const express = require("express");
const router = express.Router();

const categoriesController = require("../controllers/categoriesController");

router.get("/", categoriesController.getCategories);

router.get("/add-category", categoriesController.getCategoriesForm);

router.get("/:id/update", categoriesController.getUpdateCategoryForm);

router.post("/add-category", categoriesController.addCategory);

router.post("/:id/update", categoriesController.updateCategory);

router.post("/:id/delete", categoriesController.deleteCategory);

module.exports = router;
