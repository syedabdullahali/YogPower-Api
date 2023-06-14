let mongoose = require('mongoose')

let templateMaster = new mongoose.Schema({
    username: String,
    templateName: String,
    content: String,
    Status: Boolean,
    empNameC:String,
    employeeIDC:String,
    employeeUniqIdC:String,
    centerNameC:String,
    centerCodeC:String,
    adminNameC:String,
    emIdback:String
}, { timestamps: true })

module.exports = mongoose.model('templateMaster', templateMaster);
