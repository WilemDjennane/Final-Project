const mongoose = require('mongoose')

const ApresLaGuerre = mongoose.model('ApresLaGuerre', {
  '0': {
    id: {
      type: 'String'
    },
    title: {
      type: 'String'
    },
    descriptions: {
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
  '1': {
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
  '2': {
    id: {
      type: 'String'
    },
    title: {
      type: 'String'
    },
    descriptions: {
      type: [
        'Mixed'
      ]
    },
    prev: {
      type: 'String'
    }
  }
})

module.exports = ApresLaGuerre
