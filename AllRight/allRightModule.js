let mongoose = require('mongoose')
let allRightModule = new mongoose.Schema({
 empId:String,
 empName:String,
 memBerId:String,
 email:String,
 emailUniqId:String,
 crmErp:{
    crmDashboard:{
        crmDashboard:Boolean,
        rights:[]
    },
    crmEmployee:{
        crmEmployee:Boolean,
        items:{
            crmDashboard1:{
               crmDashboard1:Boolean,
               rights:[]
            },
            crmEmployeeTarget1:{
                crmEmployeeTarget1:Boolean,
                rights:[]
            },
            crmMemberCalls1:{
                crmMemberCalls1:Boolean,
                rights:[]
            },crmSalesCall1:{
                crmSalesCall1:Boolean,
                rights:[]
            },crmServicesRateCard1:{
                crmServicesRateCard1:Boolean
            }
        }
    },
    crmTrainer:{
        crmTrainer:Boolean,
        items:{
            superRight:{
                dailybatchAttendance:[],
                monthlyReport:[],
                clientAttendanceReg:[]
            },    
            crmLiveClasses1:{
                crmLiveClasses1:Boolean
            },
            allBatches1:{
                crmAllBatches1:Boolean
            },
            ptClasses1:{
                crmPtClasses1:Boolean
            },
            ttcClasses:{
                crmTtcClasses:Boolean
            },
            crmAllMembers1:{
                crmAllMembers1:Boolean
            }
        }
    }
 }

    
}, { timestamps: true })

module.exports = mongoose.model('allRightModule', allRightModule);
