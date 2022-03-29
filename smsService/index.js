
const express= require('express')
require('dotenv').config()

const app= express()

const credentials = {
    apiKey: process.env.SMS_API ,  
    username: process.env.SMS_USERNAME 
};

const Africastalking = require('africastalking')(credentials);

const sms = Africastalking.SMS
const options = {
    to: '+254793018396',
    message: "Hello (fullname) your parcel has been sent"
}

sms.send(options).then( response => {
        console.log(response);
    })

    .catch( error => {
        console.log(error);
    });



    app.listen(4000,()=>{
        console.log("Running on Port 4000")
    })