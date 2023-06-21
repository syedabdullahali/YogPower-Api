const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
//modelName
const User = require('../Models/User')
const allRight = require('../AllRight/allRightModule')
const userValidate = require('./jwt')

router.get('/all', userValidate, async function (req, res) {
    try {
        const response = await User.find()
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.get('/center-patner', userValidate, async function (req, res) {
    try {
        const response = await User.find({isAdminPatner:true})
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

router.post('/create', async (req, res) => {
    console.log(req.body)
    console.log(req.body.password)

    try {
        let {username,email,profileLogo,center,centerCode,partnerName,typeOfPartner,location,
             startDate,expDate,numberOfMY,typeOfNum,password,status,Designation,empName,empId,mobNo,
             createdBy,createrId,isAdmin,isAdminPatner,packege,memBerId,brandLogo, city,country} = req.body;
        //Checking if User Already Exists
        let found = await User.findOne({ email });
        if (found) return res.status(400).send({ error: "User already Exists" });
        //Hashing Password
        console.log(password)
        let salt = await bcrypt.genSalt(5);
        const hashed = await bcrypt.hash(password, salt);
        password = hashed;
        // dashboardAccess = dashboardAccess.toLowerCase()
        //Creating a User
        let temp = await new User({username,email,profileLogo,center,centerCode,partnerName,typeOfPartner,location,
             startDate,expDate,numberOfMY,typeOfNum,password,status,Designation,empName,empId,mobNo,
          createdBy,createrId,isAdmin,isAdminPatner,packege,memBerId,brandLogo, city,country        
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
        let {username,email,profileLogo,center,centerCode,partnerName,typeOfPartner,location,
            startDate,expDate,numberOfMY,typeOfNum,password,status,Designation,empName,empId,mobNo,
            createdBy,createrId,isAdmin,isAdminPatner,packege,memBerId,brandLogo, city,country           
        } = req.body;

        let salt = await bcrypt.genSalt(5);
        const hashed = await bcrypt.hash(password, salt);
        password = hashed;

        const response = await User.findByIdAndUpdate(req.params.email, 
        {username,email,profileLogo,center,centerCode,partnerName,typeOfPartner,location,
             startDate,expDate,numberOfMY,typeOfNum,password,status,Designation,empName,empId,mobNo,
             createdBy,createrId,isAdmin,isAdminPatner,packege,memBerId,brandLogo, city,country});

        const response1 = await  allRight.findOneAndUpdate({emailUniqId:req.params.email}, {
            email, 
            empId,
            memBerId:memBerId,
            emailUniqId:req.params.email
        });

       const response3 = await  Promise.all([response,response1])


        return res.status(200).json(response3)
    } catch (err) {
        console.log('hekrj')
        return res.status(500).json({ error: err })
    }
})


router.delete('/delete/:id', userValidate, async (req, res) => {
    try {
        const articleID = req.params.id.toString().trim(); 
        const response1 =  User.findByIdAndDelete(req.params.id);
        const response2 =  allRight.findOneAndDelete({emailUniqId:articleID});
        const rsponse3 =  await  Promise.all([ response1, response2])

        return res.status(200).json(rsponse3)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
})

module.exports = router


// https://dribbble.com/shots/20827206-eCommerce-Website-Skyrise-Decor-Landing-Page
// https://dribbble.com/shots/21512807-eCommerce-Website-Fornic-Furniture-Interior-Landing-Page
// https://dribbble.com/shots/21164893-Corals-Furniture-Landing-Page
// https://dribbble.com/shots/21538030-Hem-Furniture-Brand-Website
