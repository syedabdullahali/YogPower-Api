let mongoose = require('mongoose')

let Users = new mongoose.Schema({
    username: {
        type: String,
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
    isEmployee:Boolean,
    packege:String,
    typeOfPartner:String,
    location:String,
    brandLogo:String,
    startDate:Date,
    expDate:Date,
    city:String,
    country:String,
    superAdminUniqId:String,
}, { timestamps: true })

module.exports = mongoose.model('Users', Users);
