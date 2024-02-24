const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// register new user
router.post('/register', async (req, res) => {
  try {
    // check if user exit
    const existedUser = await User.findOne(req.body.email);
    if (existedUser) {
      return res.status(401).json({ message: 'user already existed' });
    } else {
    }
    // hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const createUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // save new user

    const savedUser = await createUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// login user
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!user){
         res.status(404).json("User not found")
    }else{
        const comparePass = await bcrypt.compare(req.body.password, user.password)
        if(comparePass){

            res.status(200).json(user)
        }else{
             res.status(403).json('invalid credentials')
        }
    }

    
  } catch (err) {
    res.status(500).json('something went wrong');
  }
});
module.exports = router;
