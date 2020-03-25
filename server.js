const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
var cors = require('cors')

mongoose.connect(process.env.DB_CONNECTION, 
{ useNewUrlParser: true, useUnifiedTopology: true })

const app = express()

app.use(express.static('client/build'))

app.use(cors())

app.use(express.json())

app.listen(5000, () => {
  console.log('connected!!')
})

const registerRoute = require('./Routes/regUser')
const loginRoute = require('./Routes/logUser')
const gameRoute = require('./Routes/game')

app.use('/register', registerRoute )
app.use('/login', loginRoute )
app.use('/game', gameRoute )
