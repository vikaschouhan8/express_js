//Express js
var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(path.join(__dirname, "public")))

// app.use('/', function(req, res, next){
//     console.log("im in middleware!!")
//     next()
// })

app.get('/', function(req, res){
    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/json", function(req,res){
    res
        .status(200)
        .json({"name":"Vikash"})
})
app.listen(3000, function(){
    console.log("listening to port 3000 in app file of epxress")
})