let mongoose = require('mongoose')

let DietDetails = new mongoose.Schema({
    username: String,
    DietStartDate: Date,
    diet_Id:String,
    Member_ID: String,
    Fullname: String,
    ContactNumber: Number,
    Gender: String,
    Purpose: String,
    DietEndDate: Date,
    ExpertAdvice: String,
    DietitianName: String,
    empNameC:String,
    employeeIDC:String,
    employeeUniqIdC:String,
    centerNameC:String,
    centerCodeC:String,
    adminNameC:String,
    emIdback:String
}, { timestamps: true })

module.exports = mongoose.model('DietDetails', DietDetails);
