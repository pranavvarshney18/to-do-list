const Todo = require("../models/todo");
//getting mongoose/db module
const db = require("../config/mongoose");
//making an array which will keep the id of all the elements which have been marked for deletion and when the delete button is called all elements having id mentioned in array will be deleted lineraly
let marked = [];


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



//mark for delete
module.exports.markForDelete = function(req, res){
    //getting id of selected element
    let id = req.query.id;
    //variable to check if the given element is already marked or not, if it is not already marked, we will mark it, else we will unmark it
    let alreadyPresent = -1;
    //checking if the element is already marked or not
    for(let i = 0; i < marked.length; i++){
        if(marked[i] == id){
            alreadyPresent = i;
            break;
        }
    }

    //if element is not marked already, we will mark it for deletion
    //if element is already present, we will unmark it
    if(alreadyPresent == -1){
        marked.push(id);
    }else{
        //unmarking the element by removing it from array
        marked.splice(alreadyPresent, 1);
    }

    console.log("Elements in array marked for deletion are :");
    for(let i of marked){
        console.log(i);
    }

    //redirecting to previous page
    res.redirect("back");
};





//delete marked elements
module.exports.deleteTodo = function(req, res){
    //iterating each marked element for deletion
    for(let id of marked){
        //finding the element by id and then deleting it
        Todo.findByIdAndDelete(id, function(err){
            //in case of error
            if(err){
                console.log("Error in deleting element from DB :", err);
                return;
            }
        });
    }

    marked.splice(0);
    //once deletion is done, redirect to previous page
    return res.redirect("back");
};