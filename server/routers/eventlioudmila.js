const express = require('express')
const EventLioudmilaPavlichenko = require('../models/eventlioudmila')
const router = new express.Router()

router.post('/api/se-battre-pour-son-pays/lioudmila-pavlitchenko/lioudmila-event', async (req, res) => {
  const eventLioudmilaPavlichenko = new EventLioudmilaPavlichenko(req.body)

  try {
    await eventLioudmilaPavlichenko.save()
    res.status(201).send(eventLioudmilaPavlichenko)
  } catch (e) {
    res.status(404).send(e)
  }
})

router.get('/api/se-battre-pour-son-pays/lioudmila-pavlitchenko/lioudmila-event', async (req, res) => {
  try {
    const getEventLioudmilaPavlichenko = await EventLioudmilaPavlichenko.find({})
    res.status(201).send(getEventLioudmilaPavlichenko)
  } catch (e) {
    res.status(404).send(e)
  }
})

module.exports = router
