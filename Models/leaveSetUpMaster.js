let mongoose = require('mongoose')

let leaveSetUpMaster  = new mongoose.Schema({
username:String,    
noOfLeave:String,
noOfSl:String,
noOfCl:String,
noOfPl:String,
}, { timestamps: true })

module.exports =   mongoose.model('leaveSetUpMaster', leaveSetUpMaster);



