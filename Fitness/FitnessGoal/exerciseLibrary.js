const mongoose = require('mongoose')

const ExerciseLibrarySchema = mongoose.Schema(
    {
        Sr_No: {
            type: String,
            required: true,
        },
        Category_Name: {
            type: String,
            required: true,
        },
        Exercise_Image: {
            type: String,
            required: true,
        },
        Video: {
            type: String,
            required: true,
        },
        Exercise_Name: {
            type: String,
            required: true,
        },
        Description: {
            type: String,
            required: true
        },
        Created_By: {
            type: String,
            required: true
        },
        Action: {
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

const ExerciseLibrary = mongoose.model('ExerciseLibrary', ExerciseLibrarySchema);


module.exports = ExerciseLibrary;