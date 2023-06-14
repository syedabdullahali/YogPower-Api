let mongoose = require('mongoose')

let expenseMaster = new mongoose.Schema({
    username: String,
    CategoryName: String,
    ApprovalLevel1: String,
    ApprovalLevel2: String,
    empNameC:String,
    employeeIDC:String,
    employeeUniqIdC:String,
    centerNameC:String,
    centerCodeC:String,
    adminNameC:String,
    emIdback:String
}, { timestamps: true })

module.exports = mongoose.model('expenseMaster', expenseMaster);
