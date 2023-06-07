let mongoose = require('mongoose')
let obj = Boolean

let allRightModule = new mongoose.Schema(
    {
 empId:String,
 empName:String,
 memBerId:String,
 email:String,
 emailUniqId:String,
 crmRights:{
    crmDashboard:{
        value:Boolean,
        rights:[]
    },
    crmEmployee:{
        value:obj,
        items:{
            crmDashboard1:{
                value:obj,
               rights:[]
            },
            crmEmployeeTarget1:{
                value:obj,
                rights:[]
            },
            crmMemberCalls1:{
                value:obj,
                rights:[]
            },crmSalesCall1:{
                value:obj,
                rights:[]
            },crmServicesRateCard1:{
                value:obj
            }
        }
    },
    crmTrainer:{
        value:obj,
        items:{
            superRight:{
                dailybatchAttendance:[],
                monthlyReport:[],
                clientAttendanceReg:[]
            },    
            crmLiveClasses1:{
                value:obj
            },
            crmAllBatches1:{
                value:obj
            },
            crmPtClasses1:{
                value:obj
            },
            crmTtcClasses:{
                value:obj
            },
            crmAllMembers1:{
                value:obj
            }
        }
    }
 }

    
}, { timestamps: true })

module.exports = mongoose.model('allRightModule', allRightModule);
