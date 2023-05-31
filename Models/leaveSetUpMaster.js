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
totalLeave:Number  
}, { timestamps: true })

module.exports =   mongoose.model('leaveSetUpMaster', leaveSetUpMaster);



