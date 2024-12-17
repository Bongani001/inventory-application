const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/", productsController.getProducts);

router.get("/addproduct", productsController.getProductForm);

router.post("/addproduct", productsController.addProduct);

router.post("/:id/delete", productsController.deleteProduct);

module.exports = router;
