// function for connection to the MongoDB database
const mongoose = require('mongoose');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env.local') })

async function dbConnect(){
    //  connect using the URI
    if (mongoose.connection.readyState === 0){
        const mongoURI = process.env.MONGO_URI;
        console.log("URI: ", mongoURI);
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
    }
}

module.exports = dbConnect;