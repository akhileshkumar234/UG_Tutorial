const express=require('express');
const path=require("path");
const app=express();
const mongoose=require("mongoose");
require("./db/connect");

const Contact=require("./models/contact");
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Server is running at prot no. ");
    console.log(port);
});

const static_path=path.join(__dirname,"../Main");
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static(static_path));

app.get("/",(req,res)=>{
    res.render("Index");
})







//create a new user in our db
app.post("/",function(req,res){
    let detail= Contact({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        phoneNo:req.body.phoneNo,
        collegename:req.body.collegename,
        gender:req.body.gender,
        branch:req.body.branch,
        state:req.body.state,
        city:req.body.city
    });

    detail.save();
    res.redirect("/");

});
//contact db
