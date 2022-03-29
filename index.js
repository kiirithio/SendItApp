require('dotenv').config()
const express = require('express')
const app = express()
const regSendIt = require('./emailService/registration')
const cron = require('node-cron')

const run = async() => {
    cron.schedule('*/5 * * * * *', async() => {
        console.log("NODEMAILER running");
        await regSendIt()
    })
}

run()
const PORT = 6090
app.listen(PORT,() =>console.log(`Service running on Port: ${PORT}`))