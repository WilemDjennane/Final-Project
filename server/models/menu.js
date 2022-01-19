const mongoose = require('mongoose')

const Menu = mongoose.model('Menu', {
  menu: {
    type: [
      'Mixed'
    ]
  },
  prev: {
    type: 'String'
  }
})

module.exports = Menu
