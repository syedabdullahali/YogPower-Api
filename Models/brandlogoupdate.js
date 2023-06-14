let mongoose = require('mongoose')

let brandlogoupdate = new mongoose.Schema({
    username: String,
    logoId: String,
    logoImage: String,
    empNameC:String,
    employeeIDC:String,
    employeeUniqIdC:String,
    centerNameC:String,
    centerCodeC:String,
    adminNameC:String,
    emIdback:String
}, { timestamps: true })

module.exports = mongoose.model('brandlogoupdate', brandlogoupdate);