//getting express module 
const express = require("express");
//defining port
const port = 8000;
//getting express ejs layout module
const expressLayouts = require("express-ejs-layouts");
//getting mongoose/db module
const db = require("./config/mongoose");
//getting schema
const Todo = require("./models/todo");

//launching express server
const app = express();

//use express router
app.use("/", require("./routes/index"));
//telling express that all views must be rendered first from expressLayouts
app.use(expressLayouts);
//extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
//including static files
app.use(express.static("./assets"));
// to convert the info sent by "<form>" into a json object
app.use(express.urlencoded());


//set up view engine
app.set("view engine", "ejs");
app.set("views", "./views");






//checking if express server is running or not
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }else{
        console.log(`Server is up and running on port: ${port}`);
    }
});