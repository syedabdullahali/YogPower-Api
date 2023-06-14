const mongoose = require('mongoose');
let designation = new mongoose.Schema(
    {
        username: String,
        jobDesignation: String,
        department: String,
        availableVacancy: Number,
        status: Boolean,
        empNameC:String,
        employeeIDC:String,
        employeeUniqIdC:String,
        centerNameC:String,
        centerCodeC:String,
        adminNameC:String,
        emIdback:String
    }, { timestamps: true }
);
module.exports = mongoose.model('designations', designation);