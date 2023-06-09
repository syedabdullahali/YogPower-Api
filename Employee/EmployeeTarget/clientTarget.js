const mongoose = require('mongoose')

const clientTargetSchema = mongoose.Schema(
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
            type:Number,
            required:true
        },
        New_Sales:{
            type: String,
            required:true
        },
        Reference:{
            type: String,
            required:true
        },
        Renewals:{
            type: Number,
            required:true
        },
        Upgrade_Sales:{
            type: Number,
            required:true
        },
        Cross_Selling:{
            type: Number,
            required:true
        },
        Total_Collected:{
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

const clientTarget = mongoose.model('ClientTarget',clientTargetSchema);


module.exports = clientTarget ;