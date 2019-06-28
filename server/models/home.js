const mongoose = require('mongoose')

const Home = mongoose.model('Home', {
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  next: {
    type: String
  },
  images: {
    type: String
  }
})

module.exports = Home
