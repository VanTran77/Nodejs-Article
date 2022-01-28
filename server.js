const express = require('express')
require("./config/mongoose")
const router = require('./router')
const app = express()

app.set('view engine','ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(router)

app.listen(1112, () => console.log('Connected to port 1112 ...'))