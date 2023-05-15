const { Readable } = require('stream');
const readline = require('readline');
const { productsService } = require('../services/index.js');

const getAllProducts = async (_req, res) => {
  try {
    const products = await productsService.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error getting products.' });
  }
};

const handleCSVFile = async(req, res) => {
  if(!req.file){
    return res.status(404).json({message: 'no file was provided'})
}
const {file} = req;
const { buffer } = file;
const readableFile = new Readable();
readableFile.push(buffer);
readableFile.push(null);

let results = [] 
const fileLine = readline.createInterface({
  input: readableFile
})
for await (let line of fileLine) {
  const lineSplit = line.split(",");
  const productCode = Number(lineSplit[0]);
  const newPrice = Number(lineSplit[1]);
  const result = await productsService.updatePrice(productCode, newPrice);
  console.log(result);
  results.push(result)
}
return res.status(200).json(results);
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