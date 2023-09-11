
const express = require('express');
const Invoice = require('../Models/Invoice');
const router = express.Router()

function togetCashData(type,data){
    const data2 = (data||[]).reverse().flatMap((el)=>{
          if(type==='Recipts')
          {
             return   el.Receipts.map((el2,i)=>{
                    delete el2._id
                 return ({
                          cashHandOverto:'',
                          totalCash:+el2.PaidAmount,
                          date:el2.NewSlipDate,
                          type,
                          clientName:el.MemberName,
                          id:el.MemberId,
                          clientId:el.clientId,
                          InvoiceNo:el.InvoiceNo +"RN"+(i+1),
                          counseller:el2.Counseller,
                          invoiceUniqId:el._id,
                          bothId:el2._id,
                          Receipts:el.Receipts,
                          no:el2.no
                    })})

          }else{
              return [{
                cashHandOverto:'',
                totalCash:el.paidAmount,
                date:el.createdAt,
                counseller:el.counseller,
                type,
                clientName:el.MemberName,
                clientId:el.clientId,
                InvoiceNo:el.InvoiceNo,
                id:el.MemberId,
                invoiceUniqId:el._id,
                bothId:el._id
          }] 
         }
    })

    return data2 
}





router.get('/filter-by-employee/:employeeId', async function (req, res) {
    const employeeId = req.params.employeeId;
    try {
        const response = await Invoice.find({employeeMongoId: employeeId})

        const response2 = response.reverse().map((el)=>{
            const resiptsData =  el.Receipts.map((el2,i)=>{
              if(el2?.Pay_Mode ==='Cash'){
                return {el,no:i}
              }   
            }).filter((el)=>el)
           return {...el,Receipts:resiptsData}
      })

        const ReciptsData =   togetCashData('Recipt',[...response2.filter((el)=>el?.Receipts[0])])
        const InvoiceData =  togetCashData('Invoice',response.filter((el)=>el?.paymode ==='Cash'))  
        
        return res.status(200).json([...ReciptsData,...InvoiceData]);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})


router.get('/filter-by-admin/:partnerAdminId', async function (req, res) {
    const partnerAdminId = req.params.partnerAdminId;
    try {
        const response = await Invoice.find({partnerAdminMongoId: partnerAdminId})

        const response2 = response.reverse().map((el)=>{
            const resiptsData =  el.Receipts.map((el2,i)=>{
              if(el2?.Pay_Mode ==='Cash'){
                return {el,no:i}
              }   
            }).filter((el)=>el)
           return {...el,Receipts:resiptsData}
      })

        const ReciptsData =   togetCashData('Recipt',[...response2.filter((el)=>el?.Receipts[0])])
        const InvoiceData =  togetCashData('Invoice',response.filter((el)=>el?.paymode ==='Cash'))  
        
        return res.status(200).json([...ReciptsData,...InvoiceData]);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})
  
  

// router.patch('',async function (req,res){
    

//     Invoice.updateOne(
//     {
//        _id: '123',
//        'friends._id': '1232'
//     },
//     {
//        $set: {
//           'friends.$.name': 'newName'
//        }
//     }
//  ) 

// })
