let mongoose = require('mongoose')


let ttcVideo = new mongoose.Schema({
      courseName:String,
      formalOfVideos:String,
      sessionNo:String,
      videoLink:String,
}, { timestamps: true })

module.exports =   mongoose.model('ttcVideo', ttcVideo);

