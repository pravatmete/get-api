const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const users = require('./models/users');
const endVariable = require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_UNAME}:${process.env.DB_PASS}@cluster0.xdhtt.mongodb.net/${process.env.DB_UNAME}?retryWrites=true&w=majority`, 
{useNewUrlParser: true,
    useUnifiedTopology: true})
.then( ()=>console.log('Database connection success'))
.catch((err)=>console.log(err))

app.get('/users',(req,res)=>{
    users.find().then((data)=>{
        res.json(data)
    })
})


app.listen(port, ()=>{
    console.log(`server running on ${port}`)
})