let mongoose = require('mongoose')

let leaveSetUpMaster.js  = new mongoose.Schema({
username:String,    
noOfLeave:String,
noOfSl:String,
noOfCl:String,
noOfPl:String,
}, { timestamps: true })

module.exports =   mongoose.model('leaveSetUpMaster.js ', leaveSetUpMaster.js );



