const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    age: { type: Number},
    bio: { type: String },
    image:{type:String},
    password: { type: String, required: true },
    isDelted:{type:Boolean,default:false},
    role:{
      type:String,
      enum:['admin','user'],
      default:"user",
      require:true
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User',userSchema)
module.exports = User
