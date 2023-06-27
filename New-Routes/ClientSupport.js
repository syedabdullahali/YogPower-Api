const express = require('express')
const router = express.Router()
//modelName
const clientSupport = require('../CRM/ClientManagement/clientSupport')

const valiDateRouteFun = require('../Routes/valiDateRouteFun')
valiDateRouteFun(router,clientSupport)

router.get('/:id', async function (req, res) {
    try {
        const response = await clientSupport.findById({ _id: req.params.id })
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.post('/update/:id', async (req, res) => {
    try {
        const response = await clientSupport.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const response = await clientSupport.findByIdAndDelete(req.params.id);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

module.exports = router
