const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return camelize(result); 
};

const findByCode = async (productCode) => {
  const query = 'SELECT * FROM products WHERE code = ?';
  const values = [productCode];
  const [result] = await connection.execute(query, values);
  if (result.length === 0) {
    return null; // Produto não encontrado
  }
  return camelize(result[0]);
};

const updatePrice = async (productCode, newPrice) => {
  const query = 'UPDATE products SET sales_price = ? WHERE code = ?';
  const values = [newPrice, productCode];
  const [result] = await connection.execute(query, values);
  return (result)
};

module.exports = {
  findAll,
  findByCode,
  updatePrice
};