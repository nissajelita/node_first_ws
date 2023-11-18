const express = require('express');
const { append } = require('express/lib/response');
const productController = require('../controller/productController');

const router = express.Router();

router.get('/', productController.getProducts)

module.exports = router;