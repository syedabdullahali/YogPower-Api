const mongoose = require('mongoose')

const IMPCallListSchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
        },
        Name: {
            type: String,
        },
        Mobile: {
            type: String
        },
        Email_Id: {
            type: String
        },
        Address: {
            type: String
        },
        Category: {
            type: String
        },
        Company_Name: {
            type: String
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