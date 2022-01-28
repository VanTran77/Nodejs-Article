const mongoose = require('mongoose')
const dbURI = 'mongodb+srv://nodejscl:pass123321@nodejsmongo.a4lyw.mongodb.net/nodejs-demo-cl?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then (result => console.log("Connected to Mongodb"))
    .catch (err => console.log(err));