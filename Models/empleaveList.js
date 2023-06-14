let mongoose = require('mongoose')

let empleaveList = new mongoose.Schema({ 
leaveDate:Date,
empId:String,	
empName:String,
useLeave:String,
MemberId:String,
availableLeave:String,  
noOfLeave:Number,
noOfSl:Number,
noOfCl:Number,
noOfPl:Number,
year:Number,
empNameC:String,
employeeIDC:String,
employeeUniqIdC:String,
centerNameC:String,
centerCodeC:String,
adminNameC:String,
emIdback:String
}, { timestamps: true })


module.exports =   mongoose.model('empleaveList', empleaveList);
