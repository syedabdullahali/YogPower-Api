
let mongoose = require('mongoose')

let ttcPDFDetails = new mongoose.Schema({

    courseName: String,
    typeOfCourse: String,
    courseLink: String,
    documentType: String,
    docName:String,
    view: String,

				
					
}, { timestamps: true })

module.exports = mongoose.model('ttcPDFDetails', ttcPDFDetails);
