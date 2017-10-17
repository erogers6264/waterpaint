var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/paintings", function (req, res) {
    var paintings = [
        {name: "Water Hill", image: "https://farm8.staticflickr.com/7357/27567185190_ab28f091f8.jpg"},
        {name: "Stormy Crest", image: "https://farm1.staticflickr.com/81/250850029_8ce3afe516.jpg"},
        {name: "Wyatt Point", image: "https://farm6.staticflickr.com/5455/9574452450_536bcb901c.jpg"}
    ];
    
    res.render("paintings", {paintings:paintings});
});

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("The waterpaint Server Has Started!");
});