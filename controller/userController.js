let user01 = {
    name:"muzammil",
    id:1,
    email:"muzammil@gmail.com",
    contact:97985378902798
   }
   let user02 = {
       name:"muzammil2",
       id:2,
       email:"muzammil2@gmail.com",
       contact:97985378902798
      }
      let user03 = {
       name:"muzammil3",
       id:3,
       email:"muzammil3@gmail.com",
       contact:37985378902798
      }
      let user04 = {
       name:"muzammil4",
       id:4,
       email:"muzammil4@gmail.com",
       contact:49853789028
      }
      let user05 = {
       name:"muzammil5",
       id:5,
       email:"muzammil5@gmail.com",
       contact:57985378902798
      }
   let users = [user01, user02, user03, user04, user05];
   const getAllusers =(req, res)=>{
       res.status(200).json({message:"success!",data:users});
   }
       
    module.exports = {getAllusers}