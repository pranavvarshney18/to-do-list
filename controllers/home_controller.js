const Todo = require("../models/todo");
//getting mongoose/db module
const db = require("../config/mongoose");

// to convert the info sent by "<form>" into a json object
// app.use(express.urlencoded());

//controller for home page
module.exports.home = function(req, res){
    res.render("home");
};



//controller for creating a new todo
module.exports.createTodo = function(req, res){
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, function(err, newTodo){
        if(err){
            console.log("Error in creating a Todo!");
            return;
        }

        //newTodo is an object of the new todo created
        console.log("************", newTodo);
        return res.redirect("back");
    });
};