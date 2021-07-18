const mongoose=require("mongoose");

const studentcontactSchema=  mongoose.Schema({
    firstname: {
        type:String,
        required:true
    },
    lastname: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    phoneNo: {
        type:Number,
        required:true,
        unique:true
    },
    collegename: {
        type:String,
        required:true
    },
    gender: {
        type:String,
        required:true
    },
    branch: {
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
});

//creating a collections
const Contact=mongoose.model("Contact",studentcontactSchema);

module.exports=Contact;