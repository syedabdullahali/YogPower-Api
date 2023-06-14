const mongoose=require('mongoose')
const Schema=mongoose.schema

const shiftTimeSchema=new mongoose.Schema({
     shiftName:{
        type:String
     },
     startTime:{
        type:Date
     },
     endTime:{
        type:Date
     },
     username:{
        type:String
     },
     centerCode:{
        type:String
     },
     empNameC:String,
     employeeIDC:String,
     employeeUniqIdC:String,
     centerNameC:String,
     centerCodeC:String,
     adminNameC:String,
     emIdback:String
})

const shiftTimeModel=mongoose.model('shift-time-schedule', shiftTimeSchema)
module.exports=shiftTimeModel
