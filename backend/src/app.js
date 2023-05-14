const express = require('express');
const { productsRouter, packsRouter } = require('./routers');

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/packs', packsRouter);

module.exports = app;