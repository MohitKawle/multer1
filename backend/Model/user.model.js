
const mongoose=require("mongoose")


const userSchema=mongoose.Schema({
    name:{type:String,requird:"true"},
    email:{type:String,required:"true"},
    phone:{},
    adress:[],
    uploads:[]

})

const userModel=mongoose.model("user",userSchema)

module.export=userModel

