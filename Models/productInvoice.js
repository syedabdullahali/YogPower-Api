let mongoose = require('mongoose')

let productInvoice = new mongoose.Schema({
    username: String,
    date: String,
    centerName: String,
    InvoiceNo: String,
    MemberId: String,
    counseller:String, 
    totalAmount:Number,
    paidAmount:Number, 
    clientId:String,
    contact:Number,
    followUpDate:String,
    EmployeeId:String,
    fees: Number,
    amount: Number,
    paymode:String, 
    pendingAmount:Number,
    InventoryStock:[
        {
         Product_Code:{
           type: String,
        },
        Product_Name:{
           type: String,
        },
        Brand_Name:{
           type: String,
        },
         Category:{
           type: String,
        },
         Color:{
           type: String,
        },
        Price:{
           type: String,
        },
         Total_Stock:{
           type: String,
        },    
        Available_Stock:{
           type: String,
        },
        item:{
             type: String,
        }    
        }       
       ]
}, { timestamps: true })

module.exports = mongoose.model('productInvoice', productInvoice);
