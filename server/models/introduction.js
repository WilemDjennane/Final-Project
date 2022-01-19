const mongoose = require('mongoose')

const Introduction = mongoose.model('Introduction', {
  title: {
    type: 'String'
  },
  description: {
    type: 'String'
  },
  audio: {
    type: 'String'
  },
  datas: {
    type: [
      'Mixed'
    ]
  },
  prev: {
    type: 'String'
  },
  next: {
    type: 'String'
  }
})

module.exports = Introduction
