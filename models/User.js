const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
  name:{
    type: String,
    required: true
  },
   email:{
    type: String,
    required: true,
    unique: true
  },
    mobileNo:{
    type: number,
    required: true,
    unique: true
  },
   password:{
    type: number,
    required: true
  },
  date:{
    type: Date,
    default: Date.now 
  }
});

module.exports = mongoose.modal('user', UserSchema)