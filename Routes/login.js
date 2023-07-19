const router = require('express').Router();
//modelName
const bcrypt = require('bcrypt');
const User = require('../Models/User');
const jwt = require('jsonwebtoken');
router.post('/:boolVal', async function (req, res) {
    try {
        let { email, password} = req.body;
        const {boolVal} = req.params.boolean
        let logo = ''
        
        const user = await User.findOne({ email });

        if(user.isAdmin===false && user.isAdminPatner===false ){
            const user2 = await User.findById({ _id:user.createrId });
            logo = user2.brandLogo
        }
        else{
            logo = user.brandLogo
        }
        if (user && logo!=='') {
            let valid = '';

               if(boolVal==='direct-login'){
               valid= password == user.password
               }else{
               valid= await bcrypt.compare(password, user.password);
               }

            if (!valid) {
                res.status(400).send("Password not matched");
            } else {

                const token = jwt.sign({ _id: user._id,
                                        email: user.email, 
                                        center: user.center,
                                        centerCode: user.centerCode, 
                                       }, 'sdiohufvhbiehhidethisthing', {
                    expiresIn: '45h'
                });

                res.header("auth-token", token).send({
                    token, user: {
                        username: user.username,
                        email: user.email,
                        center: user.center,
                        centerCode: user.centerCode,
                        emailUniqId:user._id,
                        isAdmin:user.isAdmin,
                        isAdminPatner:user.isAdminPatner,
                        isEmployee:user.isEmployee,
                        startDate:user.startDate,
                        expDate:user.expDate,
                        status:user.status,
                        brandLogo:logo,
                        package:user.package,
                        createdBy:user.createdBy,
                        createrId:user.createrId,
                        profileLogo:user?.profileLogo
                    }
                });
            }
        } else {
            res.status(404).json({ message: 'User not found, Please Signup' })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: err })
    }
});
module.exports = router;
