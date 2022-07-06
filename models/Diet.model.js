/*const {Schema, model}= require('mongoose')
// TODO: Please make sure you edit the user model to whatever makes sense in this case
const dietSchema = new Schema(
 { user: [{	
          type: Schema.Types.ObjectId,
          ref: "User"
          }],

    menu:{
              desayuno: [{	
                type: Schema.Types.ObjectId,
                ref: "Desayuno"
              }],
              comida:  [{	
                type: Schema.Types.ObjectId,
                ref: "Comida"
              }],
              cena:     [{	
                type: Schema.Types.ObjectId,
                ref: "Cena"
              }]  
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Dieta = model("Dieta", dietSchema);

module.exports = Dieta;*/
