const {Schema, model}= require('mongoose')
// TODO: Please make sure you edit the user model to whatever makes sense in this case
const recipeSchema = new Schema(
  {
    label: {
      type: String,
      required: true
    },
    image: String
    ,
    url:  String
    ,
    ingredientLines:{ type:[String]}
    ,
    calories: Number
    ,
    totalTime: Number
    ,
    apiId: String
    
}
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
