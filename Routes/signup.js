const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
//modelName
const User = require('../Models/User')
const userValidate = require('./jwt')

router.get('/all', userValidate, async function (req, res) {
    try {
        const response = await User.find()
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.post('/create', async (req, res) => {
    try {
        let {
  username,
  email,
  passwor,
  center,
  centerCode,
  status,
  Designation,
  empName,
  empId,
  mobNo,
  MemBerId,
  createdBy,
  createrId
        } = req.body;
        //Checking if User Already Exists
        let found = await User.findOne({ email });
        if (found) return res.status(400).send({ error: "User already Exists" });
        //Hashing Password
        let salt = await bcrypt.genSalt(5);
        const hashed = await bcrypt.hash(password, salt);
        password = hashed;
        dashboardAccess = dashboardAccess.toLowerCase()
        //Creating a User
        let temp = await new User({
  username,
  email,
  passwor,
  center,
  centerCode,
  status,
  Designation,
  empName,
  empId,
  mobNo,
  MemBerId,
  createdBy,
  createrId
        });
        const response = await temp.save();
        return res.status(200).json(response);
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: err })
    }
});

router.post('/update/:email', async (req, res) => {
    try {
        let {
   username,
  email,
  passwor,
  center,
  centerCode,
  status,
  Designation,
  empName,
  empId,
  mobNo,
  MemBerId,
  createdBy,
  createrId
        } = req.body;
        let salt = await bcrypt.genSalt(5);
        const hashed = await bcrypt.hash(password, salt);
        password = hashed;
        dashboardAccess = dashboardAccess.toLowerCase()
        const response = await User.findByIdAndUpdate(req.params.email, {
   username,
  email,
  passwor,
  center,
  centerCode,
  status,
  Designation,
  empName,
  empId,
  mobNo,
  MemBerId,
  createdBy,
  createrId
        });
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})


router.delete('/delete/:id', userValidate, async (req, res) => {
    try {
        const response = await User.findByIdAndDelete(req.params.id);
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

module.exports = router
