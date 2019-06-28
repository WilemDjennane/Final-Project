const mongoose = require('mongoose')

const EventGermaineTillion = mongoose.model('EventGermaineTillion', {
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
  }
})

module.exports = EventGermaineTillion
