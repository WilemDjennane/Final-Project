const mongoose = require('mongoose')

const LioudmilaPavlichenko = mongoose.model('LioudmilaPavlichenko ', {
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
    video: {
      type: 'String'
    },
    title: {
      type: 'String'
    },
    prev: {
      type: 'Date'
    },
    next: {
      type: 'Date'
    }
  },
  '2': {
    id: {
      type: 'Date'
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
    },
    next: {
      type: 'Date'
    }
  },
  '3': {
    id: {
      type: 'Date'
    },
    title: {
      type: 'String'
    },
    description: {
      type: 'String'
    },
    audio: {
      type: 'String'
    },
    prev: {
      type: 'Date'
    },
    next: {
      type: 'String'
    }
  },
  '4': {
    id: {
      type: 'String'
    },
    link: {
      type: [
        'Mixed'
      ]
    },
    prev: {
      type: 'Date'
    }
  }
})

module.exports = LioudmilaPavlichenko
