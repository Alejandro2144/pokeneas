const express = require('express');
const { getRandomPokeneaJSON, getRandomPokeneaInfo } = require('../controllers/pokeneaController');

const router = express.Router();

router.get('/pokenea', getRandomPokeneaJSON);
router.get('/pokenea-info', getRandomPokeneaInfo);

module.exports = router;
