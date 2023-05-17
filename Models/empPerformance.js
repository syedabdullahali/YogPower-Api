let mongoose = require('mongoose')

let empPerformance = new mongoose.Schema({
    username: String,
    image: String,
    FullName: String,
    EmailAddress: String,
    CountryCode: Number,
    ContactNumber: Number,
    whatsappNumber: Number,
    Gender: String,
    DateofBirth: Date,
    Age:String,
    address: String,
    Area: String,
    city: String,
    resume: String,
    EmployeeCategory: String,
    PinCode: Number,
    State: String,
    PayoutType: String,
    Grade: String,
    loginAccess: Boolean,
    Anniversary: Date,
    JobDesignation: String,
    Department: String,
    Salary: Number,
    AdminRights: String,
    joiningDate: Date,
    EmployeeID: String,
    AttendanceID: String,
    AccountNo: Number,
    IFSC: String,
}, { timestamps: true })

const empPerformance = mongoose.model('empPerformance', empPerformance);

module.exports =  empPerformance
