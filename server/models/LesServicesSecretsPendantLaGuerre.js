const mongoose = require('mongoose')

const LesServicesSecretsPendantLaGuerre = mongoose.model('LesServicesSecretsPendantLaGuerre', {
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
  '3': {
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
    audios: {
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
  '5': {
    id: {
      type: 'String'
    },
    title: {
      type: 'String'
    },
    prev: {
      type: 'String'
    }
  }
})

module.exports = LesServicesSecretsPendantLaGuerre
