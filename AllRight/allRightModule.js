let mongoose = require('mongoose')
let allRightModule = new mongoose.Schema({
 empId:String,
 empName:String,
 memBerId:String,
 email:String,
 emailUniqId:String,
 crmErp:{
    crmDashboard:{
        value:Boolean,
        rights:[]
    },
    crmEmployee:{
        value:Boolean,
        items:{
            crmDashboard1:{
                value:Boolean,
               rights:[]
            },
            crmEmployeeTarget1:{
                value:Boolean,
                rights:[]
            },
            crmMemberCalls1:{
                value:Boolean,
                rights:[]
            },crmSalesCall1:{
                value:Boolean,
                rights:[]
            },crmServicesRateCard1:{
                value:Boolean
            }
        }
    },
    crmTrainer:{
        value:Boolean,
        items:{
            superRight:{
                dailybatchAttendance:[],
                monthlyReport:[],
                clientAttendanceReg:[]
            },    
            crmLiveClasses1:{
                value:Boolean
            },
            allBatches1:{
                value:Boolean
            },
            ptClasses1:{
                value:Boolean
            },
            ttcClasses:{
                value:Boolean
            },
            crmAllMembers1:{
                value:Boolean
            }
        }
    }
 }

    
}, { timestamps: true })

module.exports = mongoose.model('allRightModule', allRightModule);
