let mongoose = require('mongoose')

let taxMaster = new mongoose.Schema({
    username: String,
    Date: Date,
    TaxName: String,
    Tax: Number,
    Status: Boolean,
    empNameC:String,
    employeeIDC:String,
    employeeUniqIdC:String,
    centerNameC:String,
    centerCodeC:String,
    adminNameC:String,
    emIdback:String
}, { timestamps: true })

module.exports = mongoose.model('taxMaster', taxMaster);
