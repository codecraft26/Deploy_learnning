const express=require("express")
const app=express()
const cookieParser=require("cookie-parser")
const bodyParser = require("body-parser")
const todo=require("./routes/TodoRoutes")
require("dotenv").config({

  path:"./config/.env"
})

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.json({
      "helloo":"welocome to home page"
    })
})
app.use("api/v1",todo)

module.exports=app