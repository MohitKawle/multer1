const {Router}=require("express");
const userModel = require("../Model/user.model")
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');







//Router
const userRouter=Router();



userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    if(email==null ||password==null){return (res.send("Invalid Credentials"))}
    
    let User=await userModel.findOne({email})      
    if(!User){return res.send({message:"Invalid Credentials"})}
   
    
    bcrypt.compare(password, User.password,function(err, data) {
        console.log(password,User.password,data)
        try {
            if(!data){return res.send({message:"Invalid Credentials"})}
            var token = jwt.sign({ email: email },process.env.SECRET);
           return res.send({message:"Login succesful",token})
        } catch (error) {
            res.send(err)
            
        }
       
        });
    })
 






module.exports=userRouter
