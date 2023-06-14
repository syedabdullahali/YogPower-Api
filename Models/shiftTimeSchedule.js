let mongoose = require('mongoose')

let shiftTimeSchedule = new mongoose.Schema({
     shiftName:String,
     startTime:String,
     endTime:String,
     username:String,
     centerCode:String,
     empNameC:String,
     employeeIDC:String,
     employeeUniqIdC:String,
     centerNameC:String,
     centerCodeC:String,
     adminNameC:String,
     emIdback:String
}, { timestamps: true })


module.exports =   mongoose.model('shiftTimeSchedule', shiftTimeSchedule);
