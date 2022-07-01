const router = require("express").Router();
const mongoose= require("mongoose")
const axios= require("axios");
const Api = require("../service/api.service")
const recetaApi = new Api()


const User= require("../models/User.model")
const Diet= require("../models/Diet.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");
const { userInfo } = require("os");


router.post("/", (req, res, next)=>{
    const {edad, genero, peso, altura, actividad} = req.body
    

    if(genero === "hombre"){
        const GEB= (10*peso)+(6.25*altura)-(5*edad)+5
        const GET= GEB+parseInt(actividad,10)
        res.render(`diet`, {GET})
       //.then(()=>User.findByIdAndUpdate(req.session.user._id, {GET: GET}, {new:true}))
       //.then((user)=>{        console.log(user)        res.redirect("/")} )
      }
      else {
        const GEB = (10*peso)+(6.25*altura)-(5*edad)-161
        const GET= GEB+parseInt(actividad,10)
        
        res.render(`diet`, {GET})
       //.then(()=>User.findByIdAndUpdate(req.session.user._id, {GET: GET}, {new:true}))
       //.then((user)=>{        console.log(user)        res.redirect("/")})
      }
    
    })



router.get('/', (req,res, next)=>{
    console.log("HOLA")
recetaApi
.getRecipe()
.then((receta)=>console.log(receta))
    //User.findByIdAndUpdate(userInfo.getProfileId(), {GET} ).then((sus)=>{console.log(sus)})
})

module.exports= router