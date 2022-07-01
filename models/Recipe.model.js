const {mongoose, model}= require('mongoose')
// TODO: Please make sure you edit the user model to whatever makes sense in this case
const recipeSchema = new mongoose.Schema(
  {
    label: {
      type: String,
    }
}
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
