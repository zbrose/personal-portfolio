
export default function (req,res) {
    
    require('dotenv').config()
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
        secure: true,
    })

    const mailData = {
        from: process.env.EMAIL,
        to: process.env.MY_EMAIL,
        subject: `Message From ${req.body.name}`,
        text: req.body.message,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, (err, data) => {
        if (err) {
        console.log(err);
        res.send("error" + JSON.stringify(err));
        } else {
        console.log(data, "mail send");
        res.send("success");
        }
    });
}

