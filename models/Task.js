const mongoose = require('mongoose')
const { Schema } = mongoose;

const TaskSchema = new Schema({
  Title:{
    type: String,
    required: true
  },
   description:{
    type: String,
    required: true
  },
    status:{
    type: number,
    required: true,
  },
   priority:{
    type: number,
    required: true
  },
  date:{
    type: Date,
    default: Date.now 
  }
});

module.exports = mongoose.model('task', TaskSchema)