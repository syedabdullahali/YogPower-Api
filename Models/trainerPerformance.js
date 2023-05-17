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
}, { timestamps: true })

module.exports =   mongoose.model('trainerPerformance ', trainerPerformance );


