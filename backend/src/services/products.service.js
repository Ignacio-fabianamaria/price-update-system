const { productsModel, packsModel } = require('../db/models');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const updatePrice = async (productCode, newPrice) => {
  const product = await productsModel.findByCode(productCode);
  
  if (!product) {
    return { 
      type: 'error',
      message: `${productCode} - Product code not found` };
  }
  
  const currentPrice = product.salesPrice;
  const minPriceLimit = currentPrice * 0.9; // 10% a menos
  const maxPriceLimit = currentPrice * 1.1; // 10% a mais
  
  if (newPrice < minPriceLimit || newPrice > maxPriceLimit) {
    return { type: 'error',
    message: `${productCode} - Upgrade greater or less than 10% of the current product price` };
  }
  if (newPrice === currentPrice) {
    return {
      type: 'error',
      message: `${productCode} - New price same as current price` };
  }
  const result = await productsModel.updatePrice(productCode, newPrice);
  
  if (result) {
    const updatedProduct = await productsModel.findByCode(productCode);
    return {
      message: {
        codigo: updatedProduct.code,
        nome: updatedProduct.name,
        precoAtual: currentPrice,
        novoPreco: newPrice
      }
    };
  } else {
    return { type: 'error', message: 'Failed to update price' };
  }
};

module.exports = {
  findAll,
  updatePrice
};