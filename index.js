const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require(cors)

const app = express()
app.use(express.json())
app.use(cors())//acesso publico

// iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
requireDir('./src/models')


//primeira rota
app.use('/api', require('./src/routes'))

app.listen(3001, () => {
    console.log('ouvindo a porta 3001')
})