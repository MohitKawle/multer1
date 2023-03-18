const express = require("express");
const multer = require("multer");
var cors = require('cors')
const Model=require("./Model/user.model");
module.require("dotenv").config();
const { connection } = require("./config/db");




// const fileStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'files')
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.originalname + '-' + (new Date()).toISOString())
//     }
//   })




const upload = multer({ dest: "uploads/" });
const app = express();
const PORT=process.env.PORT||5000
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/upload_files", upload.array("files"), uploadFiles);
app.get("/download",(req,res)=>{
    res.send("download")
})

function uploadFiles(req, res) {
    try {
        console.log(req);
        console.log("reqfiles",req.files);
        res.json({ message: "Successfully uploaded files" });
        
    } catch (error) {
        res.send("some error occured")
    }
  
}


app.listen(PORT,async()=>{
    try {
        await connection;
        console.log("Started");
        
    } catch (error) {
        console.log("\n-----------------error-----------------\n",error)
    }
   
})