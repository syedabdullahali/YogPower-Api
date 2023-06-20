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
    packege:String,
    centerDetails:{
        profileLogo:String,
        centerName:String,
        centerCode:String,
        partnerName:String,
        contact:Number,
        typeOfPartner:String,
        location:String,
        city:String,
        country:String,
        startDate:Date,
        expDate:Date,
        packege:String
    }
}, { timestamps: true })

module.exports = mongoose.model('Users', Users);
