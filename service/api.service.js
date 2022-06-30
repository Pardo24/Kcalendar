const axios= require("axios");

const random= aliments[Math.random()*aliments.length]
const aliments= [chicken, potatoe, carrot, celery, apium, olives, chickpeas, coriander, egg, onion, beef, tofu, apple, pear, eggplant, pumpkin, quinoa, cheese, fish, tomatoe, cucumber, rice, pasta, bacon, asparagus, artichokes, cauliflower, garlic, mushrooms, salad, spinach, curry, noodles, tamari]

class ApiService {
    constructor(){
        this.api= axios.create({
            baseURL: `https://api.edamam.com/api/recipes/v2`
        })

    }
    getRecipe= (recipe) => api.get(`?type=public&q=${random}&app_id=d91f5dad&app_key=ef814ea5f29498f296050534c03c44c3`)
    .then((sup)=> console.log(sup.data))
}


module.exports= ApiService