let mongoose = require('mongoose')

let holidayListMaster = new mongoose.Schema({
    username: String,
    Date: Date,
    Holiday: String,
    HolidayNo: String,
    Status: Boolean,
    empNameC:String,
    employeeIDC:String,
    employeeUniqIdC:String,
    centerNameC:String,
    centerCodeC:String,
    adminNameC:String,
    emIdback:String
}, { timestamps: true })

module.exports = mongoose.model('holidayListMaster', holidayListMaster);
