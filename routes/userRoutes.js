const express = require('express')
const User = require('../models/User.js')
const router = express.Router()


// get all user
router.get('/', async(req,res)=>{
   try{
      const users = await User.find()
      !users && res.status(404).json('no users found at the moment')
      res.status(200).json(users)

   }catch(err){
    res.status(500).json('something went wrong')

   } 
})

module.exports = router