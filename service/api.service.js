const axios= require("axios");


const aliments= ["chicken", "potatoe", "carrot", "celery", "apium", "olives", "chickpeas", "coriander", "egg", "onion", "beef", "tofu", "apple", "pear", "eggplant", "pumpkin", "quinoa", "cheese", "fish", "tomatoe", "cucumber", "rice", "pasta", "bacon", "asparagus", "artichokes", "cauliflower", "garlic", "mushrooms", "salad", "spinach", "curry", "noodles", "tamari"]
let randomIng= aliments[Math.random()*aliments.length-1]
 
let carbohidrats= 0-200
 let mealType= "Lunch"
let kcal= 800
let greixos = 0-100
let protes= 0-50





class ApiService {
    constructor(){

        this.api= axios.create({
            baseURL: `https://api.edamam.com/api/recipes/v2`
        })

    }
    
    getRecipe= () => this.api.get( `?type=public&q=${randomIng}&app_id=d91f5dad&app_key=ef814ea5f29498f296050534c03c44c3&mealType=${mealType}&calories=${(kcal-150)-(kcal+150)}&nutrients%5BCHOCDF%5D=${carbohidrats}&nutrients%5BFAMS%5D=${greixos}&nutrients%5BPROCNT%5D=${protes}&field=uri&field=label&field=image&field=images&field=source&field=url&field=dietLabels&field=healthLabels&field=ingredientLines&field=ingredients&field=calories&field=glycemicIndex&field=totalTime&field=cuisineType&field=mealType&field=totalNutrients&field=totalDaily&field=digest`)
  
    
}






module.exports= ApiService