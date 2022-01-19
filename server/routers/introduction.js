const express = require('express')
const Introduction = require('../models/introduction')
const router = new express.Router()

router.post('/api/intro', async (req, res) => {
  const introduction = new Introduction(req.body)

  try {
    await introduction.save()
    res.status(201).send(introduction)
  } catch (e) {
    res.status(404).send(e)
  }
})

router.get('/api/intro', async (req, res) => {
  try {
    const introduction = await Introduction.find({})
    res.send(introduction)
  } catch (error) {
    res.status(404).send()
  }
})

module.exports = router
