let mongoose = require('mongoose')


let tcClientCertificate = new mongoose.Schema({
    username:String,
    name:String,
    contactNo:String,
    emailID:String,
    MemberId:String,
    course:String,
    service:String,
    joiningDate:String,
    books:String,
    prractical:String,
    viva:String,
    project:String,
    videos:String,
    theory:String,
    exam:String,
    result:String,
    certification:String,
    grade:String,
    certificationNum:String,
    fileName:String,
    visit:String	
}, { timestamps: true })

module.exports =   mongoose.model('tcClientCertificate', tcClientCertificate);
