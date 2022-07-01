const router = require("express").Router();
const mongoose= require("mongoose")


const User= require("../models/User.model")
const Diet= require("../models/Diet.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");


router.post("/", isLoggedIn, (req, res, next)=>{
    const {edad, genero, peso, altura, actividad} = req.body
    

    if(genero === "hombre"){
        const GEB= (10*peso)+(6.25*altura)-(5*edad)+5
        const GET= GEB+parseInt(actividad,10)
        res.send(`Your diary caloric consume is ${GET} Kcal`)
       // .then(()=>User.findByIdAndUpdate(req.session._id, {GET: GET}, {new:true}))
       // .then((user)=>{res.redirect("/")})
      }
      else {
        const GEB = (10*peso)+(6.25*altura)-(5*edad)-161
        const GET= GEB+parseInt(actividad,10)
        res.send(`Your diary caloric consume is ${GET} Kcal`)
       // .then(()=>User.findByIdAndUpdate(req.session._id, {GET: GET}, {new:true}))
       // .then((user)=>{res.redirect("/")})
      }
    
    })



router.get('/', (req,res, next)=>{
    res.render('diet')
})

module.exports= router