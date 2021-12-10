const mongoose = require ("mongoose")
const Schema = mongoose.Schema
// TODO: Please make sure you edit the user model to whatever makes sense in this case
const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    city: {type: Schema.Types.ObjectId, ref: 'User'},
    breed: {
        type: String
    },
    age: Number,
    photo: {
        type: String,
        required: true
    },
    playDate: String,
    playTime: String,
    address: String,
    adoption: Boolean,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);
const Pet = mongoose.model("Pet", petSchema);
module.exports = Pet;