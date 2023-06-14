let mongoose = require('mongoose')


let ttcVideo = new mongoose.Schema({
      courseName:String,
      formalOfVideos:String,
      sessionNo:String,
      videoLink:String,
      empNameC:String,
      employeeIDC:String,
      employeeUniqIdC:String,
      centerNameC:String,
      centerCodeC:String,
      adminNameC:String,
      emIdback:String
}, { timestamps: true })

module.exports =   mongoose.model('ttcVideo', ttcVideo);

