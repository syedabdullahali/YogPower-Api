const mongoose = require('mongoose')

const clientSupportSchema = mongoose.Schema(
    {
        memBerId: {
            type: String,
        },
        Client_Name: {
            type: String,
        },
        Regular_Mobile_No: {
            type: String,
        },
        Type_Of_Request: {
            type: String,
        },
        Request_Date: {
            type: String,
        },
        Request_Details: {
            type: String,
        },
        Status: {
            type: Boolean,
        },
        Medium: {
            type: String,
        },
        Delete: {
            type: String,
        },
        
    },
)

const ClientSupport = mongoose.model('ClientSupport', clientSupportSchema);


module.exports = ClientSupport;
