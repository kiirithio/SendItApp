const express = require('express')
const app = express()
app.use(express.json())
 
app.use('/parcels', require('./routes/parcelRoutes'))
app.use('/users', require('./routes/userRoutes'))

app.listen(5000, () =>{
    console.log("running");
})