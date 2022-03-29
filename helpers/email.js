const nodeMailer = require('nodemailer');
require("dotenv").config()

function createTransporter(config) {
    let transpoter = nodeMailer.createTransport(config);
    return transpoter;
}

const defaultConfig = {
    host: 'smtp.gmail.com',
    port: 587,
    tls: {
        rejectUnauthorized: false
    },

    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    }
};

module.exports = {
    sendMail: async(email)=>{
        const transpoter = createTransporter(defaultConfig)
        await transpoter.verify()
        await transpoter.sendMail(email);
    }
}