const router = require("express").Router();
const mongoose= require("mongoose")


const User= require("../models/User.model")
const Diet= require("../models/Diet.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.post("/", (req, res, next)=>{
    const {edad, genero, peso, altura, actividad} = req.body
    console.log(req.body)
    if(genero === "hombre"){
      let GEB= (10*peso)+(6.25*altura)-(5*edad)+5
      const GET= GEB*actividad
      res.send(`Your diary kcal needs are ${GET}`)
    }
    else {
      let GEB = (10*peso)+(6.25*altura)-(5*edad)-161
      const GET= GEB*actividad
      res.send(`Your diary kcal needs are ${GET}`)
    }
})  

router.get('/', isLoggedIn, (req,res, next)=>{
    res.render('diet')
})

module.exports= router