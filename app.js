const express = require('express')
const cors = require("cors")
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const mainRouter = require('./router/mainRouter')

mongoose.connect(process.env.MONGO_KEY)
    .then( () => {
        console.log('Connection was succesful')
    })
    .catch((e) => {
        console.log(e)
        console.log('Error while connecting to db')
    })


app.listen(3000)
app.use(cors())
app.use(express.json())

app.use('/', mainRouter)