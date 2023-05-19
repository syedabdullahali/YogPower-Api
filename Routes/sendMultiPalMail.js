const express =   require('express')
const router = express.Router()

const nodemailer = require('nodemailer')


router.get('/all',async (req,res)=>{
res.send('I am a server')
})


router.post('/mail',async (req,res)=>{
    // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: 'syedabdullahali380@gmail.com',
        pass: 'volovnvxxlkorwmw'
    }
  });

  // send mail with defined transport object
console.log(req.body)

  let info = await transporter.sendMail({
    from:'syedabdullahali380@gmail.com', // sender address
    to: req.body.client,
    subject: req.body.subject,
    text: req.body.message,

    html: "<b>Hello world?</b>", // html body
  });


  transporter.sendMail(info,async (error,info)=>{

    if(error){
        console.log(error)
    }else{
        console.log("email sent" +info.response)
    }
  })
//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//   res.json(info)

  // Preview only available when sending through an Ethereal account
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

)
// volovnvxxlkorwmw


// host: 'smtp.ethereal.email',
// port: 587,
// auth: {
//     user: 'elissa.champlin@ethereal.email',
//     pass: '4GGR45Nh77ge2D4zK1'
// }


module.exports = router