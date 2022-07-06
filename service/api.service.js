const axios= require("axios");


const aliments= ["chicken", "potatoe", "carrot", "celery", "olives", "chickpeas","lentils", "coriander", "egg", "onion", "beef", "tofu", "apple", "eggplant", "pumpkin", "quinoa", "cheese", "fish", "tomatoe", "cucumber", "rice", "pasta", "bacon", "asparagus", "artichokes", "cauliflower", "garlic", "mushrooms", "salad", "spinach", "curry", "noodles", "tamari"]
const mealType= ["Breakfast","Lunch", "Dinner"]
let i = 0


class ApiService {
    constructor(){
        this.api= axios.create({
            baseURL: `https://api.edamam.com/api/recipes/v2`,
        
        
 })
    }
    random= () => {return aliments[Math.floor(Math.random()*aliments.length)]}
    getRecipe= () => this.api.get( `?type=public&q=${this.random()}&app_id=d91f5dad&app_key=ef814ea5f29498f296050534c03c44c3&mealType=Breakfast&mealType=Dinner&mealType=Lunch&_limit=20`)
}



class RecetaGET {
    constructor(){
       /* this.GET= GET
        this.kcal= this.GET
        this.carbohidrats= this.kcal*0.55
        this.greixos = this.kcal*0.25
        this.protes = this.kcal*0.2
        this.i= i*/
       
        this.api= axios.create({
            baseURL: `https://api.edamam.com/api/recipes/v2`
        })

    }
    random= () => {return aliments[Math.floor(Math.random()*aliments.length)]}
    getRecipe= (i, kcal, carbohidrats, greixos, protes) => this.api.get( `?type=public&q=${this.random()}&app_id=d91f5dad&app_key=ef814ea5f29498f296050534c03c44c3&mealType=${mealType[i]}&calories=${(this.kcal-150)}-${(this.kcal+150)}&nutrients%5BCHOCDF%5D=${(this.carbohidrats-30)}-${(this.carbohidrats+20)}&nutrients%5BFAT%5D=${(this.greixos-15)}-${(this.greixos+15)}&nutrients%5BPROCNT%5D=${(this.protes-15)}-${(this.protes+15)}`)
       
        
    }







module.exports= ApiService, RecetaGET