let mongoose = require('mongoose')

let individualMembers = new mongoose.Schema({
    serviceId: {
        type: Number,
        unique: true,
    },
    serviceName: String,
    serviceDuration: String,
    packageStatus: Boolean,
    remainingdayToExpire: String,
    startDate: Date,
    expiryDate: Date,
    memberId: {
        type: Number,
        unique: true,
    },
    empNameC:String,
    employeeIDC:String,
    employeeUniqIdC:String,
    centerNameC:String,
    centerCodeC:String,
    adminNameC:String,
    emIdback:String
}, { timestamps: true })

module.exports = mongoose.model('individualMembers', individualMembers);
