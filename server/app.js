const mongoose = require('mongoose')
const express = require('express');
var cors = require('cors');
const dotenv = require('dotenv');
const router = require('./router/auth');
const app = express();
const db = 'mongodb+srv://saiyedayan1:ayan9898234502@cluster0.yn0gs.mongodb.net/AsmProject?retryWrites=true&w=majority'
app.use(express.json());

require('./db/conn');
app.use(cors())
app.use(require('./router/auth'))

const User = require('./model/userSchema')



app.listen(8000,()=>{
    console.log("server is running  on 8000")
});