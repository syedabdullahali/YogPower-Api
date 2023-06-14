let mongoose = require('mongoose')

let empJoining = new mongoose.Schema({
username: String, 
DocumentName:String,
documentDetails:String,   
empNameC:String,
employeeIDC:String,
employeeUniqIdC:String,
centerNameC:String,
centerCodeC:String,
adminNameC:String,
emIdback:String 
}, { timestamps: true })

module.exports =   mongoose.model('empJoining', empJoining);
