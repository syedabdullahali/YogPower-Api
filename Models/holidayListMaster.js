let mongoose = require('mongoose')

let holidayListMaster = new mongoose.Schema({
    username: String,
    Date: Date,
    Holiday: String,
    Holiday: Number,
    Status: Boolean,
}, { timestamps: true })

module.exports = mongoose.model('holidayListMaster', holidayListMaster);
