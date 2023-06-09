const jwt = require('jsonwebtoken')
const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();
const bcrypt = require("bcrypt");
router.get("/", (req, res) => {
  res.send("hello from learners");
});

router.post("/register", (req, res) => {
 
  const { name, email, password, cpassword } = req.body;

  if (!name || !email || !password || !cpassword) {
    return res.send({ error: "plz filled the field properly" }).status(422).json({ error: "plz filled the field properly" });
  }

  User.findOne({ email }).then((userExist) => {
    if (userExist) {
      return res.send({error:"This email is already registered"})
        .status(422)
        .json({ error: "This email is already registered" });
    } else if (password != cpassword) {
      return res.send({err:"password is not matching"}).status(422).json({ err: "password is not matching" });
    } else {
      const user = new User({ name, email, password, cpassword });

      user
        .save()
        .then(() => {
          res.status(201).json({ msg: "User succesfully registered" });
        })
        .catch((err) => {
          res.send({ error: "Failed to register" }).status(500).json({ err: "Failed to register" });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

router.post("/signin", async (req, res) => {

  try {
    const { name, password } = req.body;
    if (!name || !password) {
      return res.send({error: "Fill the following detail properly"})
        .status(422)
        .json({ error: "Fill the following detail properly" });
    }
    const UserLogin = await User.findOne({ name: name });
  
    if (UserLogin) {
   
      const isMatch = await bcrypt.compare(password, UserLogin.password);
    
      // var token = await UserLogin.generateAuthToken();
    //  res.cookie("jwttoken",token,{
    //    expires: new Date(Date.now() + 2589200000000),
    //    httpOnly:true
    //  })
     
     
      


      if (!isMatch) {
        res.send({ error: "Invalid user details" }).status(400).json({ error: "Invalid user details" });
      } else {
        res.send({message: "user Signin Suceessfull"}).json({ message: "user Signin Suceessfull" });
      }
    } else {
      res.send({error: "Invalid user details"}).status(400).json({ error: "Invalid user details" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
