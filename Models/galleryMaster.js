let mongoose = require('mongoose')

let galleryMaster = new mongoose.Schema({
    username: String,
    date: Date,
    Name: String,
    galleryType: String,
    Description: String,
    url: String,
    image: String,
    empNameC:String,
    employeeIDC:String,
    employeeUniqIdC:String,
    centerNameC:String,
    centerCodeC:String,
    adminNameC:String,
    emIdback:String
}, { timestamps: true })

module.exports = mongoose.model('galleryMaster', galleryMaster);
