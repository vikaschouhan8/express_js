var express = require("express")
var router = express.Router()

//Import controller
var HomeCtlr = require("../controllers/Home.controller.js")

//Make routes
router
    .route('/')
    .get(HomeCtlr.HomeController)

module.exports = router