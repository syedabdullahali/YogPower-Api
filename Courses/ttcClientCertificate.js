let mongoose = require('mongoose')

let ttcClientCertificate = new mongoose.Schema({
  username:String,
  name:String,
  contactNo:String,
  emailID:String,
  course:String,
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
  couirer:String,
  visit:String	
}, { timestamps: true })

module.exports = mongoose.model('ttcClientCertificate', ttcClientCertificate);
