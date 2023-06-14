
let mongoose = require('mongoose')

let service = new mongoose.Schema({
    username: String,
    ServiceName: String,
    fees: Number,
    packages: String,
    duration: String,
    status: Boolean,
    empNameC:String,
    employeeIDC:String,
    employeeUniqIdC:String,
    centerNameC:String,
    centerCodeC:String,
    adminNameC:String,
    emIdback:String
}, { timestamps: true })

module.exports = mongoose.model('service', service);