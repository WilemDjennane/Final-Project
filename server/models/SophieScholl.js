const mongoose = require('mongoose')

const SophieScholl = mongoose.model('SophieScholl', {
  '0': {
    id: {
      type: 'String'
    },
    title: {
      type: 'String'
    },
    video: {
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
  },
  '2': {
    id: {
      type: 'String'
    },
    title: {
      type: 'String'
    },
    images: {
      type: [
        'Mixed'
      ]
    },
    audio: {
      type: 'String'
    },
    icon: {
      type: 'String'
    },
    prev: {
      type: 'String'
    },
    next: {
      type: 'String'
    }
  },
  '3': {
    id: {
      type: 'String'
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
    icon: {
      type: 'String'
    },
    prev: {
      type: 'String'
    },
    next: {
      type: 'String'
    }
  },
  '4': {
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

module.exports = SophieScholl
