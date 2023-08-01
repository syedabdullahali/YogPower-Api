const express = require('express');
const staffAttendance = require('../../Models/staffAttendance')
const employeeForm= require('../../Models/employeeForm')


const router = express.Router()

router.get('/all', async function (req, res) {


    const compareDate  = (startDate,breakDate)=>{
        let startDate2 = new Date(startDate)
        let breakDate2 = new Date(breakDate)

      return   (startDate2.getFullYear() === breakDate2.getFullYear()&&
      startDate2.getMonth() === breakDate2.getMonth()&&
      startDate2.getDate() === breakDate2.getDate())
    }



    try {
        const response =  employeeForm.find({selected:'Select'})
        const response1 =  staffAttendance.find()

        const obj={
            noOfEmployee:0,
            todayAttendedEmp:[]
        }

        const allData = await Promise.all([response,response1])
        obj.noOfEmployee=allData[0].length

        allData[1].reduce((crr,el)=>{
            if(!crr.includes(el.staffId)  && compareDate(el.checkDate,new Date()) ){
              crr.push(el.staffId)  
              obj.todayAttendedEmp.push(el)
            } 
            return crr
        },[])
      

        return res.status(200).json(obj);
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: err })
    }
})

module.exports = router