const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Akhil102:Akhilesh123@@cluster0.zvoot.mongodb.net/Student_details",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`Connection successful....`);
}).catch((err)=>{
    console.log(err);
})