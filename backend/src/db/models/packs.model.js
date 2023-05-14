const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM packs',
  );
  return camelize(result); 
};

module.exports = {
  findAll,
};