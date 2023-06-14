let mongoose = require('mongoose')


let emplDocument = new mongoose.Schema({
username: String,
empID:String,
empName:String,
docName:String,
docview:String,
MemBerId:String,
empNameC:String,
employeeIDC:String,
employeeUniqIdC:String,
centerNameC:String,
centerCodeC:String,
adminNameC:String,
emIdback:String
}, { timestamps: true })


module.exports =   mongoose.model('emplDocument', emplDocument);
