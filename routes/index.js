//getting express module
const express = require("express");
//setting router
const router = express.Router();

//getting controller for home
const homeController = require("../controllers/home_controller");

//checking is router is working properly
console.log("Router Loaded");

//routing "/" to home_controller.ejs inside controllers folder
router.get("/", homeController.home);

//exporting router 
module.exports = router;