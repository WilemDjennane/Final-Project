const mongoose = require('mongoose')

const SeBattrePoursonPays = mongoose.model('SeBattrePoursonPays', {
  links: {
    type: [
      'Mixed'
    ]
  },
  prev: {
    type: 'String'
  }
})

module.exports = SeBattrePoursonPays
