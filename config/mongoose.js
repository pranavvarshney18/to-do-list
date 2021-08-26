//getting mongoose module 
const mongoose = require("mongoose");
//connecting mongoose to mongodb
mongoose.connect("mongodb://localhost/todo_list_development");
//getting obj of db
const db = mongoose.connection;
//error function
db.on("error", console.error.bind(console, "Error connecting to MongDB"));
//once database gets connected, it will execute the following function also
db.once("open", function(){
    console.log("Connected to database :: MongoDB");
});
//exporting
module.exports = db;