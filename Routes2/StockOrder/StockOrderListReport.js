const express = require('express')
const router = express.Router()

const StockOrderList=require('../../Inventory/StockOrderList/stockOrderList')


const resivedStockListFun =(receivedStockList)=>{
    const map = new Map();

    for(let i=0; i<receivedStockList.length; i++){
        if(!map.has(receivedStockList[i].ProductId)){
                 
            const qunatity =  +receivedStockList[i].Orders_Quantity
                                        
            map.set(receivedStockList[i].ProductId, {
             ['productName']: receivedStockList[i].Product_Name,
             ['Available_Stock']: qunatity,
             ['Total_Stock']:  qunatity>0?qunatity:0,
             ['soldQuantity']:  qunatity<0?qunatity:0,
             ['productDetails']: receivedStockList[i],
             ['productCode']:receivedStockList[i].Product_Category.split('').slice(0,2).join('').toUpperCase()+""+
              receivedStockList[i]?.ProductId.split("").slice(10).join('').toUpperCase(),
            ['_id']:receivedStockList[i]._id
            
            }           
             );
             
        }
        else{
            let Available_Stock = map.get(receivedStockList[i].ProductId).Available_Stock
            let soldQuantity = map.get(receivedStockList[i].ProductId).soldQuantity
            let totalStock = map.get(receivedStockList[i].ProductId).Total_Stock
            let orderQuantity = +receivedStockList[i].Orders_Quantity
            map.set(
                receivedStockList[i].ProductId,     
            {
            ['productName']: receivedStockList[i].Product_Name, 
            ['Available_Stock']: Available_Stock+ orderQuantity,
            ['soldQuantity'] :   +orderQuantity<0? soldQuantity + orderQuantity:soldQuantity,
            ['Total_Stock'] :   +orderQuantity>0? totalStock + orderQuantity:totalStock,
            ['productDetails']: receivedStockList[i],
            ['productCode']:receivedStockList[i].Product_Category.split('').slice(0,2).join('').toUpperCase()+""+
            receivedStockList[i]?.ProductId.split("").slice(10).join('').toUpperCase(),
            ['_id']:receivedStockList[i]._id

        })
        }
    }

    let arr = [];
    for(let values of map.values()){
        arr.push(values)
    }
    return arr
}





router.get('/all', async(req, res) => {
    try{
        const receivedStockList = await StockOrderList.find({StatOfStock:'InStock'})
        return res.status(200).json(resivedStockListFun(receivedStockList))
        
   }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

router.get('/filter-by-employee/:employeeId', async function (req, res) {
    const employeeId = req.params.employeeId;
    try {
        const response = await StockOrderList.find({employeeMongoId: employeeId,StatOfStock:'InStock'})
        return res.status(200).json(resivedStockListFun(response))

    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.get('/filter-by-admin/:partnerAdminId', async function (req, res) {
    const partnerAdminId = req.params.partnerAdminId;
    try {
        const response = await StockOrderList.find({partnerAdminMongoId: partnerAdminId,StatOfStock:'InStock'})
        return   res.status(200).json(resivedStockListFun(response))

    } catch (err) {
        return res.status(500).json({ error: err })
    }
})




router.get('/all/:Product_Category',async(req,res)=>{
    try{
        const {Product_Category} = req.params;

        const receivedStockList = await StockOrderList.find({Product_Category:Product_Category,StatOfStock:'InStock'})

        res.status(200).json(resivedStockListFun(receivedStockList))
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

router.get('/filter-by-employee/:employeeId/:Product_Category', async function (req, res) {
    const {Product_Category} = req.params;
    const employeeId = req.params.employeeId;
    try {
        const receivedStockList = await StockOrderList.find({employeeMongoId: employeeId,Product_Category:Product_Category,StatOfStock:'InStock'})
        return res.status(200).json(resivedStockListFun(receivedStockList));
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.get('/filter-by-admin/:partnerAdminId/:Product_Category', async function (req, res) {
    const {Product_Category} = req.params;
    const partnerAdminId = req.params.partnerAdminId;
    try {
        const receivedStockList = await StockOrderList.find({partnerAdminMongoId: partnerAdminId,
            Product_Category:Product_Category,StatOfStock:'InStock'})

        return res.status(200).json(resivedStockListFun(receivedStockList));
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})







module.exports = router
