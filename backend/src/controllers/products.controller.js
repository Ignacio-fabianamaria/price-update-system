const { productsService } = require('../services/index.js');

const getAllProducts = async (_req, res) => {
  try {
    const products = await productsService.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error getting products.' });
  }
};

const handleCSVFile = (req, res) => {
  if(!req.file){
    return res.status(404).json({message: 'no file was provided'})
}
return res.status(200).json(req.file.buffer.toString());
}

const updateProductPrice = async (req, res) => {
  const { productCode, newPrice } = req.body;

  try {
    const result = await productsService.updatePrice(productCode, newPrice);
    if (result.type === 'error') {
      res.status(400).json({ error: result.message });
    } else {
      res.status(200).json({ message: result.message });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating product price.' });
  }
};

module.exports = {
  getAllProducts,
  updateProductPrice,
  handleCSVFile
};