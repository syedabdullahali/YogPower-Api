let mongoose = require('mongoose')

let Users = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: String,
    center: String,
    centerCode: String,
    status: Boolean,
    Designation:String,
    empName:String,
    empId:String,
    mobNo:Number,
    MemBerId:String,
    createdBy:String,
    createrId:String,
    isAdmin:Boolean,
    isAdminPatner:Boolean,
    packege:String,
    typeOfPartner:String,
    adminCity:String,
    adminCountry:String,
    adminlocation:String,
    adminName:String,
    brandLogo:String,
    startDate:Date,
    expDate:Date,
}, { timestamps: true })

module.exports = mongoose.model('Users', Users);
