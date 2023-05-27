let mongoose = require('mongoose')


let ttcVideo = new mongoose.Schema({
    srNo:String,
    courseName:String,
    formalOfVideos:String,
    sessionNo:String,
    videos:String,
    driveLink:String,	
}, { timestamps: true })

module.exports =   mongoose.model('ttcVideo', ttcVideo);
