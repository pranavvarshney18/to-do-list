const Todo = require("../models/todo");
//getting mongoose/db module
const db = require("../config/mongoose");



// to convert the info sent by "<form>" into a json object
// app.use(express.urlencoded());

//controller for home page
module.exports.home = function(req, res){
    Todo.find({}, function(err, todos){
        if(err){
            console.log("Error in fetching contacts from DB: ", err);
            return;
        }

        return res.render("home", {
            todo_list: todos,
            title: "TODO List"
        });
    });
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




//controller to delete the selected items at once
module.exports.delete = function(req, res){
    // object of todos which are marked for deletion
    let ticked = req.body["mark-for-delete"];
    console.log("id's of marked todos to be deleted are : ", ticked);
    let typeOf = typeof(ticked);


    if(typeOf === "undefined"){
        //in case if the object is empty
        console.log("Nothing to delete!");
        return res.redirect("/");   //here we can't redirect to "back", because we haven't done any action, therefore we stayed at the home page
    }else if(typeOf === "string"){
        //in case if the oject has only one element, in that case it will become a string
        Todo.findByIdAndDelete(ticked, function(err){
            if(err){
                console.log("Error in deleting the todo with id ", id, " and the error is : ", err);
            }
        });
    }else{
        // in case if the object has many elements to delete
        for(let id of ticked){
            Todo.findByIdAndDelete(id, function(err){
                if(err){
                    console.log("Error in deleting the todo with id : ", id, " and the error is : " , err);
                }
            });
        }
    }

    console.log("selected todos have been deleted!");
    // console.log("selected elements have been deleted!");
    return res.redirect("back");
};

