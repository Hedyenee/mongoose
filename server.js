const express = require('express')
const app = express()
app.use(express.json())
const mongoose= require ("mongoose")
require('dotenv').config()
require('./helpers/dbConnect')





const Port = process.env.PORT || 5000

app.use('/user' , require('./Routes/userRoutes'))

app.listen(Port, (err) => {
   err ? console.log(err) : console.log(`server running on ${Port}`)
} )