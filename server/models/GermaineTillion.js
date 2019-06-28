const mongoose = require('mongoose')

const GermaineTillion = mongoose.model('GermaineTillion', {
  '0': {
    id: {
      type: 'String'
    },
    title: {
      type: 'String'
    },
    description: {
      type: 'String'
    },
    image: {
      type: 'String'
    },
    prev: {
      type: 'String'
    },
    next: {
      type: 'String'
    }
  },
  '1': {
    id: {
      type: 'String'
    },
    title: {
      type: 'String'
    },
    links: {
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
  },
  '2': {
    id: {
      type: 'String'
    },
    title: {
      type: 'String'
    },
    links: {
      type: [
        'Mixed'
      ]
    },
    prev: {
      type: 'String'
    }
  }
})

module.exports = GermaineTillion
