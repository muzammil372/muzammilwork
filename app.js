const express = require('express')
//const bodyparser = require('body-parser')
const route = require('./routes/userRoute')
const {Sequelize} = require('sequelize')
const PORT =5001

const app = express();
app.use(express.json())
const dbconnection = async ()=>{
    
        try{
            const sequelize = new Sequelize('muzammil', 'root','', {
            host:'localhost',
            dialect:'mysql'
            });
            const connection = await sequelize.authenticate();
            console.log("connection success" ,connection)
        }
        catch(error){
            console.log('error, error')
        }
}
dbconnection()
app.use(route);

app.listen(PORT, ()=>{
    console.log(`server is running on http\\localhost:${PORT}`)
})

