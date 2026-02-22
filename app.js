require('dotenv').config()
const express=require('express')
const ejs=require('ejs')
const dbConnection=require('./app/config/dbcon')



const app=express()
dbConnection()

app.set('view engine','ejs')
app.set('views','views')
app.use(express.static('public'))





const HomeRoute=require('./app/router/HomeRoute')
app.use(HomeRoute)







const port=9876

app.listen(port,()=>{
    console.log(`server is running on port${port}`)
})
