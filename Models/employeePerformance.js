let mongoose = require('mongoose')

let employeePerformance  = new mongoose.Schema({
name:String,
empId:String,
employeeId:String,  
department:String,	
designation:String,	
punctuality:String,
productivity:String,	
response:String,	
additionalComments:String,
empNameC:String,
employeeIDC:String,
employeeUniqIdC:String,
centerNameC:String,
centerCodeC:String,
adminNameC:String,
emIdback:String
}, { timestamps: true })

module.exports =   mongoose.model('employeePerformance ', employeePerformance );


