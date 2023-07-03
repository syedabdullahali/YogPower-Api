const mongoose = require('mongoose')

const GuestListSchema = mongoose.Schema(
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
        Event: {
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

const GuestList = mongoose.model('GuestList', GuestListSchema);


module.exports = GuestList;