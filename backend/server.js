const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const userRoutes = require('./routes/userRoutes.js')
const connectDB = require('./config/db.js')


connectDB()
const port = process.env.PORT || 8000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users', userRoutes)

app.listen(port, () => console.log(`Server is listening on port ${port}`.blue.underline))

