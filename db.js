const mongoose = require('mongoose');

const mongoUri = "mongodb://localhost:27017/Workspace"

const connectToMongo = async() =>{
    try {
       await  mongoose.connect(mongoUri)
        console.log("Connected to mongo successfully")
    } catch (error) {
        console.error("Mongo connection error", error);
    }
}

module.exports = connectToMongo;