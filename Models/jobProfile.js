let mongoose = require('mongoose')

let jobProfile = new mongoose.Schema({
username: String,
Designations: String,
jobProfile:String,
empNameC:String,
employeeIDC:String,
employeeUniqIdC:String,
centerNameC:String,
centerCodeC:String,
adminNameC:String,
emIdback:String
}, { timestamps: true })


module.exports =   mongoose.model('jobProfile', jobProfile);
