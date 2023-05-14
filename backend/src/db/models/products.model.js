const connection = require('./connection');
const camelize = require('camelize');

const findAll = async () => {
  const [result] = await connection.execute('SELECT * FROM products');
  return camelize(result);
};

const findByCode = async (productCode) => {
  const query = 'SELECT * FROM products WHERE code = ?';
  const values = [productCode];
  const [result] = await connection.execute(query, values);
  return result.length === 0 ? null : camelize(result[0]);
};

const updatePrice = async (productCode, newPrice) => {
  const query = 'UPDATE products SET sales_price = ? WHERE code = ?';
  const values = [newPrice, productCode];
  const [result] = await connection.execute(query, values);
  return result.affectedRows === 1;
};

const findPackByProductCode = async (productCode) => {
  const query = 'SELECT * FROM packs WHERE product_id = ?';
  const values = [productCode];
  const [result] = await connection.execute(query, values);
  return result.length === 0 ? null : camelize(result[0]);
};

const updatePackPrice = async (productCode, newPrice) => {
  const query = 'UPDATE packs SET pack_price = ? WHERE pack_id = ?';
  const values = [newPrice, productCode];
  await connection.execute(query, values);
};

module.exports = {
  findAll,
  findByCode,
  updatePrice,
  findPackByProductCode,
  updatePackPrice
};
