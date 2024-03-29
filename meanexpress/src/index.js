const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

mongoose.connect('mongodb://localhost:27017/mean', {
    useNewUrlParser: true
})

require('./api/routes')(app)

app.listen(9000, () => {
    console.log('Express rodando angular + express')
})