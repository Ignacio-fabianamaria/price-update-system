const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM packs',
  );
  return camelize(result); 
};

const findByProductCode = async (productCode) => {
  const query = 'SELECT * FROM packs WHERE pack_id = ?';
  const values = [productCode];
  const [result] = await connection.execute(query, values);
  return (result);
};

const updatePrice = async (productCode, newPrice) => {
  const query = 'UPDATE packs SET product_price = ? WHERE pack_id = ?';
  const values = [newPrice, productCode];
  await connection.execute(query, values);
};

const updatePackPrice = async (productCode, newPrice) => {
  const query = 'UPDATE packs SET pack_price = ? WHERE pack_id = ?';
  const values = [newPrice, productCode];
  await connection.execute(query, values);
};


module.exports = {
  findAll,
};