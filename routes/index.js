let express = require("express");
//create an instance of router
let router = express.Router();

router.get("/", (req,res)=>{
console.log("Home Page");
//res.send("Home Page")
//to render the ejs files for home page for instance
let data = {}
res.render("index", data);
});

router.post("/", (req,res)=>{
    console.log("Home Page");
    res.send("Home Page")
    });
    module.exports= router;