let mongoose = require('mongoose')

let hrPolicyMaster = new mongoose.Schema({
    username: String,
    Title: String,
    Policy: String,
    empNameC:String,
    employeeIDC:String,
    employeeUniqIdC:String,
    centerNameC:String,
    centerCodeC:String,
    adminNameC:String,
    emIdback:String
}, { timestamps: true })

module.exports = mongoose.model('hrPolicyMaster', hrPolicyMaster);
