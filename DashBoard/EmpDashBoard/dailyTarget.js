const express = require('express');
const employeeTargetSheet = require('../../HRManagement/employeeTargetSheet');
const invoice1 = require('../../Models/Invoice')
const staffAttendance = require('../../Models/staffAttendance')
const router = express.Router()




router.get('/all', async function (req, res) {
    let {monthNo} =  req.params
       monthNo =   6

 const monthName = ['Jan','Feb','March','April','May','June',
                    'July','August','Sept','Oct', 'Nov', 'Dec']      

    try {
    
        const obj ={
            ['Sales Target']:{target:0,achived:0},
            ['Client Target']:{target:0,achived:0},
            ['Calls Target']:{target:0,achived:0},
            ['Lead Target']:{target:0,achived:0},
            ['Renewals']:{target:0,achived:0},
            ['Referral Leads']:{target:0,achived:0},
            ['Media Target']:{target:0,achived:0}
        }
        
        const response1 = employeeTargetSheet.find({Id:'6499504cbd357274aa8acddb'})

        const allData = await Promise.all([response1])


        allData[0].filter((el)=>+el.Year===new Date().getFullYear() &&el.TargetValue+"".trim()).forEach((el)=>{
         obj[el.TargetValue].target += +el[monthName[new Date().getMonth()]]
        })
    


return res.status(200).json(obj)
} catch (err) {
        console.log(err)
        return res.status(500).json({ error: err })
}
})


module.exports = router