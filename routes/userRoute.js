const express = require('express');
const {getAllusers} = require('../controller/userController');
const route = express.Router()
const models = require("../models")



route.post("/user", (req,res)=>{
   const {id,email,name,contact} = req.body;
   const User = models.user;
   User.create({
      id: id,
      email: email,
      name: name,
      contact: contact
   });
   res.status(201).json({message:"user created success fully"})
})


route.get('/', getAllusers);

route.get("/search", (req,res)=>{
   try{
    res.status(200).json({message:"hellowd"})
   }
   catch(e){
    console.log("error, e")
   }
})

route.get('/user/role' , (req,res) => {
 try{
    let search = req.query.name
    console.log('search', search)
    res.status(200).json({message: search})
    
 }
 catch(erroe){
console.log(erroe, r)
 }
})

route.get("/users:name", (req, res) => {
    try{let search = req.params.name
    
        console.log("search", search)
        res.status(200).json({message: search }) 
    }
         catch(e){
            console.log("erroer")
         }

})

module.exports = route ;