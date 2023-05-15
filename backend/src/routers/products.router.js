const express = require('express');
const multer = require('multer');
const { productsController } = require('../controllers');

const multerConfig = multer();

const router = express.Router();

router.post('/', multerConfig.single('file'), productsController.handleCSVFile);

router.get('/', productsController.getAllProducts,);
router.patch('/', productsController.updateProductPrice);

module.exports = router;