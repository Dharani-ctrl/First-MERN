const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json());       // Pass Data Frontend To Backend

mongoose.connect("mongodb://localhost:27017/mern")


app.get("/getUsers",(req,res) =>{
    UserModel.find({}).then(function(users){
        res.json(users)
    }).catch(function(err){
        res.json(err)
    })
})

app.post("/createUser",async(req,res) =>{
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user);
})

app.listen(3001,()=>{
    console.log("Server is Running");
})