const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require
    },
    email: {
        type: String,
        require
    },
    password: {
        type: String,
        require
    }
})

const User = mongoose.model('users', userSchema)

module.exports = User