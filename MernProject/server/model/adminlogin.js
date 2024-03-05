const mongoose=require('mongoose')
const loginSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=mongoose.model("admin",loginSchema);
module.exports=collection