const models = require("../models")
   const getAllusers =async(req, res)=>{
  const User = models.user;
  const allusers =await User.findAll();
    
       res.status(200).json({message:"success!",data:allusers});
       console.log("helow")
   }
       
    module.exports = {getAllusers}
  