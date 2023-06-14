
let mongoose = require('mongoose')

let ttcPDFDetails = new mongoose.Schema({

    courseName: String,
    typeOfCourse: String,
    courseLink: String,
    documentType: String,
    docName:String,
    view: String,
    empNameC:String,
    employeeIDC:String,
    employeeUniqIdC:String,
    centerNameC:String,
    centerCodeC:String,
    adminNameC:String,
    emIdback:String

				
					
}, { timestamps: true })

module.exports = mongoose.model('ttcPDFDetails', ttcPDFDetails);
