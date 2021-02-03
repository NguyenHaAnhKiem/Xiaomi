const express = require('express')
const router = express.Router();

const ProductController = require("../app/controllers/productController");

router.get('/product_detail', ProductController.detail);
router.get('/create_product', ProductController.create_product);

module.exports = router;
