const express = require('express');
const mediaTarget = require('../Employee/EmployeeTarget/mediaTarget');
const router = express.Router()
//modelName


const valiDateRouteFun = require('../Routes/valiDateRouteFun')
valiDateRouteFun(router,mediaTarget)



router.post('/create', async (req, res) => {
    try {
        const temp = await new mediaTarget(req.body)
        const response = await temp.save();
        console.log(response);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
});

router.post('/update/:id', async (req, res) => {
    try {
        const response = await mediaTarget.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})


router.delete('/delete/:id', async (req, res) => {
    try {
        const response = await mediaTarget.findByIdAndDelete(req.params.id);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

module.exports = router