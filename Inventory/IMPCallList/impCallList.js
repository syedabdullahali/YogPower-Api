const mongoose = require('mongoose')

const IMPCallListSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Name: {
            type: String,
            required: true,
        },
        Mobile: {
            type: String,
            required: true
        },
        Email_Id: {
            type: String,
            required: true
        },
        Address: {
            type: String,
            required: true
        },
        Category: {
            type: String,
            required: true
        },
        Company_Name: {
            type: String,
            required: true
        },
        empNameC:String,
        employeeIDC:String,
        employeeMongoId: mongoose.Schema.Types.ObjectId,
        partnerAdminMongoId: mongoose.Schema.Types.ObjectId,
        centerNameC:String,
        centerCodeC:String,
        adminNameC:String,
        
    },
)

const IMPCallList = mongoose.model('IMPCallList', IMPCallListSchema);


module.exports = IMPCallList;