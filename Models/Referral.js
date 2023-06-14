let mongoose = require('mongoose')
let Referral = new mongoose.Schema({
    userId: String,
    StaffName: String,
    Documenttype: String,
    UploadDocument: String,
    empNameC:String,
    employeeIDC:String,
    employeeUniqIdC:String,
    centerNameC:String,
    centerCodeC:String,
    adminNameC:String,
    emIdback:String
}, { timestamps: true })
module.exports = mongoose.model('Referral', Referral);