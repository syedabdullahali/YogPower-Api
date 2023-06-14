let mongoose = require('mongoose')

let leadSourceMaster = new mongoose.Schema({
    username: String,
    LeadSource: String,
    Status: Boolean,
    empNameC:String,
    employeeIDC:String,
    employeeUniqIdC:String,
    centerNameC:String,
    centerCodeC:String,
    adminNameC:String,
    emIdback:String
}, { timestamps: true })

module.exports = mongoose.model('leadSourceMaster', leadSourceMaster);
