const mongoose=require('mongoose')
const Schema= mongoose.Schema


const RegisterSchema= new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
},{
    timestamps:true,
    versionKey:false
})


const RegisterModel=mongoose.model('register',RegisterSchema)

module.exports=RegisterModel
