const mongoose = require ("mongoose")
const Schema = mongoose.Schema
// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    pet: [{type: Schema.Types.ObjectId, ref: 'Pet'}]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
module.exports = User;