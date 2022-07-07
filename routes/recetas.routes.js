const { rmSync } = require("fs");
const router = require("express").Router();
const ApiService = require("../service/api.service")
const recetaApi = new ApiService()
const Recipe = require('../models/Recipe.model')
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");


router.get('/', (req,res, next)=>{
   
     recetaApi
    .getRecipe()
    
  .then((recipesTrans)=>{

    recetasMostrar= recipesTrans.data.hits.slice(0,20)
    res.render('recipe', {recipes1: recetasMostrar, user:req.session.user})
    })
    .catch((err)=> console.log(err))
})




module.exports= router