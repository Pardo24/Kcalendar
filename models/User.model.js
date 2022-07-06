const { Schema, model } = require("mongoose");


// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    
    password: String,
    
    GET :{
      type:Number
    },

    favorites:  [{	
      type: Schema.Types.ObjectId,
      ref: "Recipe"
    }],

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

  },
  
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
