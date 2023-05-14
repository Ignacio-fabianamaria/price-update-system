const { packsModel } = require('../db/models');

const findAll = async () => {
  const packs = await packsModel.findAll();
  return { type: null, message: packs };
};

module.exports = {
  findAll,
};