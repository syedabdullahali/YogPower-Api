let mongoose = require('mongoose')

let inventoryListingMaster = new mongoose.Schema({
    username: String,
    sataus: String,
    productCategory:String,
    productName:String,
    brandName:String,
    category:String,
    productPrize:String,
    ordersQty:String,
    Kg:String,
    Color:String,
    Available_Stock:String,
    empNameC:String,
    employeeIDC:String,
    employeeUniqIdC:String,
    centerNameC:String,
    centerCodeC:String,
    adminNameC:String,
    emIdback:String
}, { timestamps: true })


module.exports =   mongoose.model('inventoryListingMaster', inventoryListingMaster);
