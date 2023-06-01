let mongoose = require('mongoose')

let empleaveList = new mongoose.Schema({ 
leaveDate:Date,
empId:String,	
empName:String,
useLeave:String,
MemberId:String,
}, { timestamps: true })


module.exports =   mongoose.model('empleaveList', empleaveList);
