const mongoose = require('mongoose')

const EventLioudmilaPavlichenko = mongoose.model('EventLioudmilaPavlichenko', {
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

module.exports = EventLioudmilaPavlichenko