const { productsRouter, packsRouter } = require('./routers');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Defina a origem permitida para o seu aplicativo React
    methods: 'GET, POST, PUT, DELETE', // Defina os métodos HTTP permitidos
    allowedHeaders: 'Content-Type, Authorization', // Defina os cabeçalhos permitidos
  }));

app.use(express.json());

app.use('/products', productsRouter);
app.use('/packs', packsRouter);

module.exports = app;