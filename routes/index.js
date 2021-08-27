//getting express module
const express = require("express");
//setting router
const router = express.Router();


//we are using POST controller , therefore we have to use express.urlencoded to get json object
router.use(express.urlencoded());


//getting controller for home
const homeController = require("../controllers/home_controller");

//checking is router is working properly
console.log("Router Loaded");

//routing "/" to home_controller.ejs inside controllers folder
router.get("/", homeController.home);
router.post("/create-todo", homeController.createTodo);
router.get("/mark-for-delete/", homeController.markForDelete);
router.get("/delete-todo/", homeController.deleteTodo);

//exporting router 
module.exports = router;