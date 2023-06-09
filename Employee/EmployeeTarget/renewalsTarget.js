const mongoose = require('mongoose')

const renewalsTargetSchema = mongoose.Schema(
    {
        Sr_No:{
            type: String,
            required:true
        },
        Year:{
            type: String,
            required:true
        },
        Employee:{
            type:String,
            required:[true,"Please enter a employee name"],
        },
        Target:{
            type:String,
            required:true
        },
        No_Of_Renewals:{
            type: String,
            required:true
        },
        Conversion:{
            type: String,
            required:true
        },
        Total_Amount:{
            type: Number,
            required:true
        },
        Achived:{
            type: String,
            required:true
        },
        annualTarget:[
            {
                monthName:{
                    type: String,
                    required:true
                },
                Target:{    
                    type: String,
                    required:true
                }
            }
            
        ],
        empNameC:String,
        employeeIDC:String,
        employeeMongoId: mongoose.Schema.Types.ObjectId,
        partnerAdminMongoId: mongoose.Schema.Types.ObjectId,
        centerNameC:String,
        centerCodeC:String,
        adminNameC:String,

    },
    
)

const renewalsTarget = mongoose.model('RenewalsTarget',renewalsTargetSchema);


module.exports = renewalsTarget ;