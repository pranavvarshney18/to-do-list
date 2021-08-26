//getting express module 
const express = require("express");
//launching express server
const app = express();
//defining port
const port = 8000;

//use express router
app.use("/", require("./routes/index"));

//checking if express server is running or not
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }else{
        console.log(`Server is up and running on port: ${port}`);
    }
});