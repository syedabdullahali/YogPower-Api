let mongoose = require('mongoose')

let holidayListMaster = new mongoose.Schema({
    username: String,
    Date: Date,
    Holiday: String,
    HolidayNo: String,
    Status: Boolean,
}, { timestamps: true })

module.exports = mongoose.model('holidayListMaster', holidayListMaster);
