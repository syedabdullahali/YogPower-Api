
let mongoose = require('mongoose')

let trainerSalarySlip = new mongoose.Schema({
    username: String,
    date:String,
    trainerName:String,   
    prHourSalary:Number,
    totalWorkingHours:Number,
    amount:Number,
    tds:Number,
    pt:Number,
    advDec:Number,
    modeOfPayment:String,
    totalAmount:Number,
    netSalary:Number,
    trainerId:String,
    empNameC:String,
    employeeIDC:String,
    employeeUniqIdC:String,
    centerNameC:String,
    centerCodeC:String,
    adminNameC:String,
    emIdback:String
}, { timestamps: true })

module.exports = mongoose.model('trainerSalarySlip', trainerSalarySlip);
