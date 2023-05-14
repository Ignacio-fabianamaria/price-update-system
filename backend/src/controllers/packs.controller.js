const { packsService } = require('../services');

const getAllPacks = async (_req, res) => {
  try {
    const packs = await packsService.findAll();
    console.log(packs);
    res.status(200).json(packs);
  } catch (error) {
    res.status(500).json({ error: 'Error getting packs.' });
  }
};

module.exports = {
  getAllPacks,
};