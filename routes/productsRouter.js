const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/", productsController.getProducts);

router.get("/addproduct", productsController.getProductForm);

module.exports = router;
