let mongoose = require('mongoose')

let trainerPerformance  = new mongoose.Schema({
username:String,  
name:String,
trainerId:String,
empId:String,  
department:String,
designation:String,
punctuality:String,
Attendance:String,
renewals:String,
training:String,
feedBACK:String,
Behaviour:String,
overallfeedback:String,
empNameC:String,
employeeIDC:String,
employeeUniqIdC:String,
centerNameC:String,
centerCodeC:String,
adminNameC:String,
emIdback:String
}, { timestamps: true })

module.exports =   mongoose.model('trainerPerformance ', trainerPerformance );


