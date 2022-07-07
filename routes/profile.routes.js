const router = require("express").Router();
const ApiService = require("../service/api.service")
const recetaApi = new ApiService()
const Recipe = require('../models/Recipe.model')
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");
const User = require('../models/User.model')


router.post("/add-favorite", isLoggedIn ,(req, res) =>{
    const principi = {label, image, url, ingredientLines, totalTime, calories, apiId}= req.body
    const idToCheck = req.body.apiId;
        Recipe.find({apiId: idToCheck})
        .then (recipeArr => {
            
            if (recipeArr.length === 0) {
            
                Recipe
                    .create(principi)
                    .then(result => {
                           
                      User
                        .findByIdAndUpdate(req.session.user._id,{$push : {favorites : result._id}})
                        .then(()=>{
                            res.redirect("/recipe")
                        })
                    })
                    .catch(err => console.log(err))
            } else {
            
                User
                .findById(req.session.user._id)
                .then((user)=>{
                    if (!user.favorites.includes(recipeArr[0]._id)){
                        User
                        .findByIdAndUpdate(req.session.user._id,{$push : {favorites : recipeArr[0]._id}})
                        .then(()=>{
                            res.redirect("/recipe")
                        })
                    }
                    else{res.redirect("/recipe")}
                })
                .catch((err)=>{
                console.log(err)
                })                
            }
        }) 
    })
    
    
    router.post("/delete-favorite", isLoggedIn, (req,res)=>{
        const {id} = req.body
        User.findByIdAndUpdate(req.user._id,{$pull : {favorites : id}})
        .then(()=>{
            res.redirect("/profile")
        })
        .catch(err => console.log(err))
    })

    
     router.get('/profile',isLoggedIn, (req, res, next)=>{
        User.findById(req.session.user._id)
  .populate('favorites')
  .then((user) => {
    res.render("profile", {user});
  })
    })  


    
    module.exports= router


 