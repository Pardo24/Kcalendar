const {mongoose, model}= require('mongoose')
// TODO: Please make sure you edit the user model to whatever makes sense in this case
const dietSchema = new mongoose.Schema(
  {
    diet: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Diet = model("Diet", dietSchema);

module.exports = Diet;
