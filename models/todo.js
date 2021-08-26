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
        required: true,
    },
    data:{
        type : Date,
        required: true,
    }
});

//defining collection 
const Todo = mongoose.model("Todos", todoSchema);

//exporting collection
module.exports = Todo;