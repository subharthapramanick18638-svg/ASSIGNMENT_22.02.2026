require('dotenv').config()
const express=require('express')
const ejs=require('ejs')
const dbConnection=require('./app/config/dbcon')



const app=express()
dbConnection()

app.set('view engine','ejs')
app.set('views','views')
app.use(express.static('public'))
app.use(express.json())






const HomeRoute=require('./app/router/HomeRoute')
app.use(HomeRoute)


const RegisterRoute=require('./app/router/RegisterRoute')
app.use('/api',RegisterRoute)




const port=9876

app.listen(port,()=>{
    console.log(`server is running on port${port}`)
})
