const mongoose = require ("mongoose");
require("dotenv").config();

// define an object with the connection parameters
// useful when connection to MongoDB Atlas server
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
};

// uri variable which holds MongoDB Atlas connection URL
const uri = "mongodb://localhost:27017/";


// establish the connection between the server and MongoDB Atlas
// done via command mongoose.connect()
const connection = mongoose
.connect(uri)
.then(() =>{
    console.log("Successfully connected to MongoDB database");
})
.catch((err) => {
    console.log(err, "Error connecting to the database")
});

module.exports = connection;
