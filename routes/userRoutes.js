const express = require('express')
const User = require('../models/User.js')
const router = express.Router()


// delete user
router.delete('/:id',async(req,res)=>{
   const id = req.params.id
   const user = await User.findByIdAndDelete(id)
   if(!user){
    res.status(403).json("You can delete only your account")
   }else{
    res.status(200).json('You have successfully deleted this user')
   }

})

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
// get single user
router.get('/:id', async(req,res)=>{
   try{
    const id = req.params.id
      const user = await User.findById(id)
    if(!user){
        res.status(404).json('no user found')
    }else{

        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other)
    }

   }catch(err){
    res.status(500).json('something went wrong')

   } 
})

module.exports = router