const mongoose = require('mongoose');

var mongoDBURL = 'mongodb+srv://kemal:kemal@cluster0.kzg5s.mongodb.net/ecommerce';

mongoose.connect(mongoDBURL, {useUnifiedTopology : true, useNewUrlParser: true});

var dbconnect = mongoose.connection

dbconnect.on('error', () => {
    console.log('MongoDB connection is failed !')
})

dbconnect.on('connected', () => {
    console.log('MongoDB connection is successful')
})

module.exports = mongoose