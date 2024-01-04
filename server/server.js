//import dependencies
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import apiRoutes from './routes/apiRoutes.js'
import cors from 'cors'
dotenv.config()


//create express app
const app = express()
app.use(express.json())

//cors needed for axios connection if 2 different ports are being use, wihtout it getting error
app.use(cors())


//connect to DB and start server
mongoose.connect(process.env.URI)
    .then(result => app.listen(process.env.PORT)) 
    .catch(err => console.log(err))


// using routes
app.use('/', apiRoutes)



