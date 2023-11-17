const express = require("express")
const mongoose = require('mongoose')
const cors = require ("cors")
const LoginModel = require('./models/loginDetails')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://athin:12345@cluster0.6kmh7nk.mongodb.net/login");


app.post("/login",(req,res)=>{
    const {email,password}= (req.body);
    LoginModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("incorrect password")
            }

            
        }else{
            res.json("No record")
        }
    })
})

app.post('/',(req, res)=>{
    LoginModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err=> res.json(err))
})




app.listen(3002,()=>{
    console.log("server is running")

})