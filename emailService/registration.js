require("dotenv").config()
const db= require('../dbs')
const ejs = require('ejs')

const { sendMail } = require("../helpers/email");


module.exports= async()=>{
    const items = await (await db.query("SELECT * FROM users WHERE isSent = 0")).recordset
    for(let item of items){
        const Email = item.email
        const id = item.id

        ejs.renderFile("templates/registration.ejs", {Email}, async (error, data) => {
            if(error) return console.log(error);
            const mailoptions = {
                from: {
                    name: "SendIt App",
                    address: process.env.EMAIL,
                },
                to: Email,
                subject: "Welcome to SendIt App",
                html: data
            };
            try {
                await sendMail(mailoptions);
                db.query(`UPDATE users SET isSent = 1 where id = '${id}'`);
                console.log(`Registration email sent to ${Email}`);
            } catch(error){
                console.log(error);
            }
        })
    }
}