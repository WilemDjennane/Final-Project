const mongoose = require('mongoose')

const DeuxResistantes = mongoose.model('DeuxResistantes', {
  links: {
    type: [
      'Mixed'
    ]
  },
  prev: {
    type: 'String'
  }
})

module.exports = DeuxResistantes
