const express=require('express')
const RegisterController= require('../controller/Registercontroller')
const router=express.Router()

router.post('/register/create',RegisterController.createRegister)
router.get('/register',RegisterController.getRegister)

module.exports=router