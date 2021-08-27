//getting mongoose library
const mongoose = require("mongoose");

//making schema for todo list
const todoSchema = new mongoose.Schema({
    description:{
        type: String, 
        required: true,
    },
    category:{
        type: String,
    },
    date:{
        type : String,
    }
});

//defining collection 
const Todo = mongoose.model("Todos", todoSchema);

//exporting collection
module.exports = Todo;