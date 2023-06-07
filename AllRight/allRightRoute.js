const express = require('express')
const router = express.Router()
//modelName
const allRightModule = require('../AllRight/allRightModule')

router.get('/all', async function (req, res) {
    try {
        const response = await allRightModule.find()
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.get('/:id', async function (req, res) {
    try {
        const response = await allRightModule.findById({ _id: req.params.id })
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.post('/create', async (req, res) => {
    try {
        console.log(req.body)
        const temp = await new allRightModule(req.body)
        const response = await temp.save();
        // const response = await allRightModule.insertMany(salesclosureData)
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({ error: err })
    }
});

router.post('/update/:id', async (req, res) => {
    try {
        const response = await allRightModule.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})


router.delete('/delete/:id', async (req, res) => {
    try {
        const response = await allRightModule.findByIdAndDelete(req.params.id);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

module.exports = router