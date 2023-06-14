let mongoose = require('mongoose')
let Batch = new mongoose.Schema({
	username: String,
	service_name: String,
	service_variation: String,
	Batch_Duration: String,
	batch_timing: String,
	status: Boolean,
	trainer_name:String,
	category:String,
	typeOfTrainer:String,
	MemberId:String,
	trainerId:String,
	BatchTime:String,
	empNameC:String,
    employeeIDC:String,
    employeeUniqIdC:String,
    centerNameC:String,
    centerCodeC:String,
    adminNameC:String,
    emIdback:String
}, { timestamps: true })
module.exports = mongoose.model('Batch', Batch);
