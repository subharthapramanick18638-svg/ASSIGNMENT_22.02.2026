const express=require('express')
const HomeController=require('../controller/HomeController')


const router=express.Router()


router.get('/',HomeController.homepage)
router.get('/login',HomeController.loginpage)






module.exports=router




