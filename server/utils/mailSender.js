const nodemailer = require("nodemailer");

const mailSender = async (email,title,body)=>{

    const transporter =  nodemailer.createTransport({
        host : process.env.MAIL_SEND_HOST,
        port:465,
        secure:true,
        auth:{
            user:process.env.SENDER_MAIL,
            pass:process.env.SENDER_PASS,
        },
    })

    const response = await transporter.sendMail({
        from:"From GoCart",
        to:`${email}`,
        subject:`${title}`,
        html:`${body}`,
    })

    console.log("Mail response",response);
    return response

}

module.exports = mailSender;



