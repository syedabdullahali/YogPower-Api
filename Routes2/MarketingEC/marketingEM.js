const express = require('express')
const router =  express.Router()
const enquiryForm = require('../../Models/enquiryForm')
const member = require('../../Models/memberForm')
const prospects = require('../../Models/prospect')
const validationFun  = require('./validationFun')


const findRenevalClientFun = validationFun.client.findRenevalClient
const findRenewedClientFun = validationFun.client.findRenewedClient
const findLeftClientFun =validationFun.client.findLeftClient

const enquiryColdCallFun = validationFun.enquiry.enquiryColdCall
const findTrailEnquiryFun=  validationFun.enquiry.findTrailEnquiry
const findApointmentFun = validationFun.enquiry.findApointment

function prospectsFun(list){
if(list.enquiryStage === "Prospect"){
    return true
}
return false

}

router.get('/all', async function (req, res) {
    try {

        console.log(validationFun)
    const response = await member.find()
    const response2 = await enquiryForm.find()
    const response3 = await prospects.find()

     const infoToMart = {
             client:[],
             enquiry:[],
             prospects:[],
            selectInput:[
               {label:'All Enquiry',value:{parent:'enquiry',child:'no'}},
               {label:'Appointment',value:{parent:'enquiry',child:'Appointment'}},
               {label:'Trial',value:{parent:'enquiry',child:'Trial'}},
               {label:'ColdEnquires',value:{parent:'enquiry',child:'ColdEnquires'}},
               {label:'prospects',value:{parent:'prospects',child:'no'}},
               {label:'All Client',value:{parent:'client',child:'no'}},    
               {label:'Active Client',value:{parent:'client',child:'active'}},
               {label:'Reneval Client',value:{parent:'client',child:'reneval'}},
               {label:'Renewed Client',value:{parent:'client',child:'renewed'}},
               {label:'Left Client',value:{parent:'client',child:'leftClient'}},                
            ]
     }
      response.forEach((el)=>{
          let obj = {
            email:el.Email,
            active:false,
            reneval:false,
            renewed:false,
            leftClient:false
        }
           if(el.status === 'active'){
            obj.active=true
           }
           if(findRenevalClientFun(el)){
            obj.reneval=true
           }
           if(findRenewedClientFun(el)){
            obj.renewed=true
           }
           if(findLeftClientFun(el)){
            obj.active=false
            obj.leftClient=true
           }
           infoToMart.client.push(obj)
      })
      response2.forEach(el => {
if(el.enquirestatus==='notshow'){
    return
}
        let obj = {
            email:el.Emailaddress,
            Appointment:false,
            Trial:false,
            ColdEnquires:false
          }
          if(findApointmentFun(el)){
            obj.Appointment=true
          }
          if(findTrailEnquiryFun(el)){
             obj.Trial=true
          }
          if(enquiryColdCallFun(el)){
               obj.ColdEnquires=true
          }
          infoToMart.enquiry.push(obj)
});
  response3.forEach((el)=>{
    let obj = {
        email:el.Email,
    }
      if(prospectsFun(el)){
        infoToMart.prospects.push(obj)
      }

  })
        return res.status(200).json(infoToMart);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

module.exports = router
