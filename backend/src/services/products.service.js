const { productsModel } = require('../db/models');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

module.exports = {
  findAll,
};