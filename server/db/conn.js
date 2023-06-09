const mongoose = require('mongoose');



// const db = 'mongodb+srv://saiyedayan1:ayan_1234@cluster0.yn0gs.mongodb.net/'
const db = 'mongodb+srv://saiyedayan1:ayan_1234@cluster0.yn0gs.mongodb.net/AsmProject?retryWrites=true&w=majority'

// mongodb+srv://saiyedayan1:ayan9898234502@cluster0.yn0gs.mongodb.net/



mongoose.connect(db,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log("connection is successfull");
}).catch((err)=>{console.log(err)})