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
  const minimumPrice = currentPrice * 0.9; // 10% a menos
  const maximumPrice = currentPrice * 1.1; // 10% a mais
  
  if (newPrice < minimumPrice || newPrice > maximumPrice) {
    return { type: 'error', message: 'Reajuste fora do intervalo permitido' };
  }
  
  const result = await productsModel.updatePrice(productCode, newPrice);
  
  if (result) {
    const updatedProduct = await productsModel.findByCode(productCode);
    return {
      type: null,
      message: {
        codigo: updatedProduct.code,
        nome: updatedProduct.name,
        precoAtual: currentPrice,
        novoPreco: newPrice
      }
    };
  } else {
    return { type: 'error', message: 'Falha ao atualizar o preço' };
  }
};

module.exports = {
  findAll,
  updatePrice
};
