const express = require("express");
const router = express.Router();

const categoriesController = require("../controllers/categoriesController");
const productsController = require("../controllers/productsController");

router.get("/", productsController.getProducts);

module.exports = router;
