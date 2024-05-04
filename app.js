const express = require('express');
const app = express();

const port = 80;

const pokeneas = [
    {
        id: 1,
        nombre: "Alexander (El Flaco)",
        altura: "1.64 cm",
        habilidad: "Negociación y Mediación",
    },
    {
        id: 2,
        nombre: "Diego (El Paisa)",
        altura: "1.70 cm",
        habilidad: "Conocimiento de la Calle",
    },
    {
        id: 3,
        nombre: "Kevin (El Mono)",
        altura: "1.75 cm",
        habilidad: "Conocimiento de Zonas de Riesgo",
    },
    {
        id: 4,
        nombre: "Ramiro (El Rata)",
        altura: "1.53 cm",
        habilidad: "Manejo de Situaciones de Conflicto en Ambientes Nocturnos",
    },
    {
        id: 5,
        nombre: "Luis (El Chispas)",
        altura: "1.61 cm",
        habilidad: "Negociación de Transacciones de Drogas",
    },
    {
        id: 6,
        nombre: "Manuel (El Rulo)",
        altura: "1.58 cm",
        habilidad: "Identificación de Calidad y Autenticidad de Sustancias",
    },
    {
        id: 7,
        nombre: "Juan (El Patotas)",
        altura: "1.62 cm",
        habilidad: "Evasión de las autoridades",
    },
    {
        id: 8,
        nombre: "Alexis (El Negro)",
        altura: "1.68 cm",
        habilidad: "Gestión de Relaciones con Proveedores",
    },
    {
        id: 9,
        nombre: "Jovani (El Jincho)",
        altura: "1.79 cm",
        habilidad: "Conocimiento de Lugares de Venta y Consumo de Drogas:",
    },
    {
        id: 10,
        nombre: "Freddy (El Pachanga)",
        altura: "1.69 cm",
        habilidad: "Conexiones en el Mundo de la Rumba",
    }
];

const pokeneasConFrases = [
    {
        imagen: "1.jpg",
        fraseFilosofica: "El conocimiento es poder."
    },
    {
        imagen: "2.jpg",
        fraseFilosofica: "La verdadera felicidad proviene del interior."
    },
    {
        imagen: "3.jpg",
        fraseFilosofica: "La vida es un viaje, no un destino."
    },
    {
        imagen: "4.jpg",
        fraseFilosofica: "Nada es imposible, la palabra misma lo dice: '¡Soy posible!'"
    },
    {
        imagen: "5.jpg",
        fraseFilosofica: "El éxito no es definitivo, el fracaso no es fatal: es el coraje para continuar lo que cuenta."
    },
    {
        imagen: "6.jpg",
        fraseFilosofica: "La verdadera grandeza reside en ser gentil."
    },
    {
        imagen: "7.jpg",
        fraseFilosofica: "El secreto de la felicidad no es hacer lo que uno quiere, sino querer lo que uno hace."
    },
    {
        imagen: "8.jpg",
        fraseFilosofica: "El amor todo lo puede, todo lo cree, todo lo espera, todo lo soporta."
    },
    {
        imagen: "9.jpg",
        fraseFilosofica: "La vida no se trata de encontrarse a uno mismo, sino de crearse a uno mismo."
    },
    {
        imagen: "10.jpg",
        fraseFilosofica: "La única forma de hacer un gran trabajo es amar lo que haces."
    },
];

app.get('/pokenea-info', (req, res) => {
    const pokeneaAleatorio = pokeneas[Math.floor(Math.random() * pokeneas.length)];
    const idContenedor = req.headers.host;
    res.json({ ...pokeneaAleatorio, idContenedor });
});

app.get('/frase-filosofica', (req, res) => {
    const pokeneaAleatorio = pokeneasConFrases[Math.floor(Math.random() * pokeneasConFrases.length)];
    const idContenedor = req.headers.host;
    res.send(`
        <img src="${pokeneaAleatorio.imagen}" alt="Imagen de Pokenea">
        <p>Frase filosófica: ${pokeneaAleatorio.fraseFilosofica}</p>
        <p>Id del contenedor: ${idContenedor}</p>
    `);
});

app.listen(port, () => {
        
    console.log(`Example app listening on port ${port}`)
        
})