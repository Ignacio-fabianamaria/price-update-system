const express = require('express');
const { productsRouter } = require('./routers');

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

module.exports = app;