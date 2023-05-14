const { productsService } = require('../services/index.js');

const getAllProducts = async (_req, res) => {
  try {
    const products = await productsService.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error getting products.' });
  }
};

module.exports = {
  getAllProducts,
};