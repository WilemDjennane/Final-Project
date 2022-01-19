const mongoose = require('mongoose')

const SimoneSegouin = mongoose.model('SimoneSegouin', {
  '0': {
    id: {
      type: 'Date'
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
      type: 'Date'
    }
  },
  '1': {
    id: {
      type: 'Date'
    },
    title: {
      type: 'String'
    },
    icon: {
      type: 'String'
    },
    audio: {
      type: 'String'
    },
    images: {
      type: [
        'Mixed'
      ]
    },
    prev: {
      type: 'Date'
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
      type: 'Date'
    }
  }
})

module.exports = SimoneSegouin
