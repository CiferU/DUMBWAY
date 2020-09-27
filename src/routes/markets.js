const express = require('express');
const app = require('../app');
const router = express.Router();

const Market = require('../models/market')

router.post('/post', (req,res) =>{
console.log('POST/post')
console.log(req.body)

let market = new Market()
    market.market= req.body.market,
    market.info= req.body.info,
    market.coordenadas= req.body.coordenadas,
    market.ubicacion= req.body.ubicacion,
    market.especialidad= req.body.especialidad,
    market.imgUrl= req.body.imgUrl,
 
    market.save() 
  });


module.exports = router;