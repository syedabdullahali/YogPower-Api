const express = require('express')
const router = express.Router()

const enquiryForm = require('../Models/enquiryForm')
const prospect = require('../Models/prospect')

function togetFilterDataNumber( enquiryData ,prospectData){

    const compareDate  = (startDate,breakDate)=>{
        let startDate2 = new Date(startDate)
        let breakDate2 = new Date(breakDate)

    
      return   (startDate2.getFullYear() === breakDate2.getFullYear()&&
      startDate2.getMonth() === breakDate2.getMonth()&&
      startDate2.getDate() === breakDate2.getDate())
    }


    const dataReportArr = {
        ENQUIRE:enquiryData.length,
        CONVERTED:0,
        TRIALS:0,
        NEW:0,
        PROSPECT:prospectData.length,
        COLD:prospectData.filter((list)=>list.CallStatus === 'Cold' ).length
    }

// Enquiry 
    for (const index in enquiryData  ){

        if(enquiryData[index].enquirestatus==='notshow'){
                 dataReportArr.CONVERTED+=1
        }
        if(enquiryData[index].appointmentfor === 'Trial Session'){
                 dataReportArr.TRIALS+=1
        }
        if(compareDate(enquiryData[index].createdAt,new Date())){
                  dataReportArr.NEW+=1
        }
            
    }
    return dataReportArr

} 




router.get('/:startDateVal/:endDateVal/all', async function (req, res) {
    try {
        const {startDateVal,endDateVal} =  req.params
        const endDate = new Date(endDateVal).setDate(new Date().getDate()+1)
        const response1 =   enquiryForm.find({createdAt:{$gte:new Date(startDateVal),$lt:endDate}})
        const response2 =   prospect.find({createdAt:{$gte:new Date(startDateVal),$lt:endDate}})
        const allData  = await Promise.all([response1,response2])       
        return res.status(200).json(togetFilterDataNumber(allData[0],allData[1]));
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})
router.get('/:startDateVal/:endDateVal/filter-by-employee/:employeeId', async function (req, res) {
    try {
        const {startDateVal,endDateVal,employeeId} =  req.params
        const endDate = new Date(endDateVal).setDate(new Date().getDate()+1)

        const response1 =   enquiryForm.find({createdAt:{$gte:new Date(startDateVal),$lt: endDate},employeeMongoId: employeeId})
        const response2 =   prospect.find({createdAt:{$gte:new Date(startDateVal),$lt: endDate},employeeMongoId: employeeId})
        const allData  = await Promise.all([response1,response2])       
        return res.status(200).json(togetFilterDataNumber(allData[0],allData[1]));
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})
router.get('/:startDateVal/:endDateVal/filter-by-admin/:partnerAdminId', async function (req, res) {
    try {
        const {startDateVal,endDateVal,partnerAdminId} =  req.params
        const endDate = new Date(endDateVal).setDate(new Date().getDate()+1)

        const response1 =   enquiryForm.find({createdAt:{$gte:new Date(startDateVal),$lt:endDate},partnerAdminMongoId: partnerAdminId})
        const response2 =   prospect.find({createdAt:{$gte:new Date(startDateVal),$lt:endDate},partnerAdminMongoId: partnerAdminId})
        const allData  = await Promise.all([response1,response2])       
        return res.status(200).json(togetFilterDataNumber(allData[0],allData[1]));
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

module.exports = router