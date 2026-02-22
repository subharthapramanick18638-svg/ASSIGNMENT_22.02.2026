const Register=require('../models/Register')

class RegisterController{

    async createRegister(req,res){
        try{ 
            const {username,password,phone}=req.body

            const reg=new Register({
                username,
                password,
                phone
            })

            const data= await reg.save()
            return res.status(200).json({
                status:true,
                message:'Register created successfully',
                data:data
            })

        } catch(error){
            return res.status(500).json({
                status:false,
                message:error.message
            })
        }
    }
    async getRegister(reg,res){
        try{ 
            const data= await Register.find()
            return res.status(200).json({
                status:true,
                message:'Register fetched successfully',
                total:data.length,
                data:data
            })

        } catch(error){
            return res.status(500).json({
                status:false,
                message:error.message
            })
        }
    }
}


module.exports=new RegisterController()