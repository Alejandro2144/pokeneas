const os = require('os');
const { pokeneasData, length } = require('../models/pokeneas.js');

function getRandomPokeneaIndex() {
    return Math.floor(Math.random() * length);
}

function getPokeneaData(index) {
    const pokenea = pokeneasData[index];
    return {
        id: pokenea.id,
        nombre: pokenea.nombre,
        altura: pokenea.altura,
        habilidad: pokenea.habilidad,
        imagen: pokenea.imagen,
        fraseFilosofica: pokenea.fraseFilosofica
    };
}

function getRandomPokeneaJSON(req, res) {
    const randomIndex = getRandomPokeneaIndex();
    const data = getPokeneaData(randomIndex);
    const containerId = os.hostname();
    res.json({ ...data, containerId });
}

function getRandomPokeneaInfo(req, res) {
    const randomIndex = getRandomPokeneaIndex();
    const pokenea = getPokeneaData(randomIndex);
    const containerId = os.hostname();
    res.send(`
        <img src="${pokenea.imagen}" alt="${pokenea.nombre}" width="30%">
        <p>${pokenea.fraseFilosofica}</p>
        <p>ID del contenedor: ${containerId}</p>
    `);
}

module.exports = { getRandomPokeneaJSON, getRandomPokeneaInfo };
