const {mongoose, model}= require('mongoose')
// TODO: Please make sure you edit the user model to whatever makes sense in this case
const dietSchema = new mongoose.Schema(
  {
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  },
  { 
    menu:{
      lunes: {desayuno: mongoose.Schema.Types.ObjectId,
              comida:   mongoose.Schema.Types.ObjectId,
              cena:     mongoose.Schema.Types.ObjectId  }
              ,

      martes: {desayuno:  mongoose.Schema.Types.ObjectId,
               comida:    mongoose.Schema.Types.ObjectId,
               cena:      mongoose.Schema.Types.ObjectId}
               ,

      miercoles: {desayuno: mongoose.Schema.Types.ObjectId,
                  comida:   mongoose.Schema.Types.ObjectId,
                  cena:     mongoose.Schema.Types.ObjectId}
                ,

      jueves: {desayuno:  mongoose.Schema.Types.ObjectId,
               comida:    mongoose.Schema.Types.ObjectId,
               cena:      mongoose.Schema.Types.ObjectId}
              ,

      viernes: {desayuno:  mongoose.Schema.Types.ObjectId,
                comida:    mongoose.Schema.Types.ObjectId,
                cena:      mongoose.Schema.Types.ObjectId}
              , 

      sabado: {desayuno:  mongoose.Schema.Types.ObjectId,
               comida:    mongoose.Schema.Types.ObjectId,
               cena:      mongoose.Schema.Types.ObjectId}
              ,

      domingo: {desayuno: mongoose.Schema.Types.ObjectId,
                comida:   mongoose.Schema.Types.ObjectId,
                cena:     mongoose.Schema.Types.ObjectId}
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Diet = model("Diet", dietSchema);

module.exports = Diet;
