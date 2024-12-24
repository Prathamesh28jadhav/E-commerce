const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes for products
router.get('/', getAllProducts); // Get all products
router.get('/:id', getProductById); // Get product by ID

module.exports = router;
