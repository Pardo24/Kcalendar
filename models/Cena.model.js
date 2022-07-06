const {Schema, model}= require('mongoose')
// TODO: Please make sure you edit the user model to whatever makes sense in this case
const cenaSchema = new Schema(
  {
    label: {
      type: String,
      required: true
    },
    image: String
    ,
    url:  String
    ,
    uri: String
}
);

const Cena = model("Cena", cenaSchema);

module.exports = Cena;
