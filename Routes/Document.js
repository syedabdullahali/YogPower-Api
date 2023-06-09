const express = require('express')
const router = express.Router()
//modelName
const Document = require('../Models/Document')

const valiDateRouteFun = require('./valiDateRouteFun')
valiDateRouteFun(router,Document)

router.get('/:id', async function (req, res) {
    try {
        const response = await Document.findById({ _id: req.params.id })
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})



router.post('/update/:id', async (req, res) => {
    try {
        const response = await Document.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})


router.delete('/delete/:id', async (req, res) => {
    try {
        const response = await Document.findByIdAndDelete(req.params.id);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

module.exports = router
