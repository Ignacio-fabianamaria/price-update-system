const express = require('express');
const { packsController } = require('../controllers');

const router = express.Router();

router.get('/', packsController.getAllPacks);


module.exports = router;