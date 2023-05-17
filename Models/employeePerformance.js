let mongoose = require('mongoose')

let employeePerformance  = new mongoose.Schema({
name:String,
empId:String,
EmployeeId:String,  
department:String,	
designation:String,	
punctuality:String,
productivity:String,	
response:String,	
additionalComments:String,
}, { timestamps: true })

module.exports =   mongoose.model('employeePerformance ', employeePerformance );


