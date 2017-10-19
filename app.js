var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var paintings = [
    {name: "Water Hill", image: "https://farm8.staticflickr.com/7357/27567185190_ab28f091f8.jpg"},
    {name: "Stormy Crest", image: "https://farm1.staticflickr.com/81/250850029_8ce3afe516.jpg"},
    {name: "Wyatt Point", image: "https://farm6.staticflickr.com/5455/9574452450_536bcb901c.jpg"},
    {name: "Water Hill", image: "https://farm8.staticflickr.com/7357/27567185190_ab28f091f8.jpg"},
    {name: "Stormy Crest", image: "https://farm1.staticflickr.com/81/250850029_8ce3afe516.jpg"},
    {name: "Wyatt Point", image: "https://farm6.staticflickr.com/5455/9574452450_536bcb901c.jpg"},
    {name: "Water Hill", image: "https://farm8.staticflickr.com/7357/27567185190_ab28f091f8.jpg"},
    {name: "Stormy Crest", image: "https://farm1.staticflickr.com/81/250850029_8ce3afe516.jpg"},
    {name: "Wyatt Point", image: "https://farm6.staticflickr.com/5455/9574452450_536bcb901c.jpg"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/paintings", function(req, res){
    res.render("paintings", {paintings:paintings});
});

app.post("/paintings", function(req, res){
    // get data from form
    var name = req.body.name;
    var image = req.body.image;
    
    // add to paintings array
    var newPainting = {name: name, image: image};
    paintings.push(newPainting);
    
    //redirect to paintings page
    res.redirect("/paintings");
});

app.get("/paintings/new", function(req, res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The waterpaint Server Has Started!");
});
