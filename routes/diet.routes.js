const router = require("express").Router();
const mongoose= require("mongoose")
const axios= require("axios");
const ApiService = require("../service/api.service")
const RecetaGET = require('../service/api.service')
const recetaApi = new ApiService()
const User= require("../models/User.model")
//const Diet= require("../models/Diet.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");
const { userInfo } = require("os");
const Desayuno = require("../models/Desayuno.model");

router.post("/", isLoggedIn, (req, res, next)=>{
    const {edad, genero, peso, altura, actividad} = req.body
    

    if(genero === "hombre"){
        const GEB= (10*peso)+(6.25*altura)-(5*edad)+5
        let GET= GEB+parseInt(actividad,10)
        res.render(`diet`, {GET})
       
        
            User.findByIdAndUpdate(req.session.user._id, {GET}, {new:true})
         
          .then(()=>{
             Desayuno.find()
             .then((desayunos)=>{
              console.log(desayunos[0]._id)
              
            User.findByIdAndUpdate(req.session.user._id,{$push : {desayuno : desayunos[0]._id}})
             })
            
          })
    }

      else {
        const GEB = (10*peso)+(6.25*altura)-(5*edad)-161
        const GET= GEB+parseInt(actividad,10)
       
       
        User.findByIdAndUpdate(req.session.user._id, {GET}, {new:true})
        
    
      }
    
    })



    router.get('/', isLoggedIn, (req,res, next)=>{
        
        kcal= req.session.user.GET
        carbohidrats= kcal*0.55
        greixos = kcal*0.25
        protes = kcal*0.2
      new RecetaGET()
      .getRecipe(0, kcal, carbohidrats, greixos, protes) 

      .then((receDesa)=>{
        const desayuno = {label, image, url, uri} = receDesa.data.hits[0].recipe

        Desayuno.create(desayuno)

        .then(recetaDesay1=>{
            console.log(recetaDesay1)

          
       
        res.render('diet')                    
  
        })
      })
        
        
                          
                          


      .catch((err)=>{
        console.log(err)
        })   
        })
        
        module.exports= router

