let mongoose = require('mongoose')

let leaveSetUpMaster  = new mongoose.Schema({
username:String,    
noOfLeave:String,
noOfSl:String,
noOfCl:String,
noOfPl:String,
monthYear:String,
month:Number,
year:Number,
totalLeave:Number ,
empNameC:String,
employeeIDC:String,
employeeUniqIdC:String,
centerNameC:String,
centerCodeC:String,
adminNameC:String,
emIdback:String 
}, { timestamps: true })

module.exports =   mongoose.model('leaveSetUpMaster', leaveSetUpMaster);



