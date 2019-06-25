const mongoose = require('mongoose')
const validator = require('validator')

const Home = mongoose.model('Home', {
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0
    },
    avatar: {
        type: Buffer
    }
})

module.exports = Home