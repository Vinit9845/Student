const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Studentdb'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const StudentRouter = require('./routes/student')
app.use('/student',StudentRouter)

app.listen(8000, () => {
    console.log('Server started on port 8000');
});
