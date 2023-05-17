let mongoose = require('mongoose')

let trainerPerformance  = new mongoose.Schema({
name:String,
empId:String,
department:String,	
designation:String,	
punctuality:String,
productivity:String,	
response:String,	
additionalComments:String,
}, { timestamps: true })

module.exports =   mongoose.model('trainerPerformance ', trainerPerformance );


