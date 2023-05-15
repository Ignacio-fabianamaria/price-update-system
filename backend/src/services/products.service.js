const { productsModel, packsModel } = require('../db/models');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const updatePrice = async (productCode, newPrice) => {
  const product = await productsModel.findByCode(productCode);
  
  if (!product) {
    return { type: 'error', message: 'Produto não encontrado' };
  }
  
  const currentPrice = product.salesPrice;
  const minPriceLimit = currentPrice * 0.9; // 10% a menos
  const maxPriceLimit = currentPrice * 1.1; // 10% a mais
  
  if (newPrice < minPriceLimit || newPrice > maxPriceLimit) {
    return { type: 'error', message: 'Reset outside the allowed range' };
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