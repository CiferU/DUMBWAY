//Imports
const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.render('index');
});

router.get('/rutas', (req,res) => {
    res.render('rutas');
});

router.get('/feedback', (req,res) => {
    res.render('feedback');
});

router.get('/gastronomica-prdefinida', (req,res) => {
    res.render('rutaGastronomica');
})

module.exports = router;