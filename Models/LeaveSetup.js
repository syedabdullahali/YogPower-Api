let mongoose = require('mongoose')

let leaveSetup  = new mongoose.Schema({
username:String,    
noOfLeave:String,
noOfSl:String,
noOfCl:String,
noOfPl:String,
}, { timestamps: true })

module.exports =   mongoose.model('leaveSetup ', leaveSetup );



