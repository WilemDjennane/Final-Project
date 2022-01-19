const express = require('express')
const LioudmilaPavlichenko = require('../models/lioudmilaPavlichenko')
const router = new express.Router()

router.post('/api/se-battre-pour-son-pays/lioudmila-pavlitchenko', async (req, res) => {
  const lioudmilaPavlichenko = new LioudmilaPavlichenko(req.body)

  try {
    await lioudmilaPavlichenko.save()
    res.status(201).send(lioudmilaPavlichenko)
  } catch (e) {
    res.status(404).send(e)
  }
})

router.get('/api/se-battre-pour-son-pays/lioudmila-pavlitchenko', async (req, res) => {
  try {
    const getlioudmilaPavlichenko = await LioudmilaPavlichenko.find({})
    res.status(201).send(getlioudmilaPavlichenko)
  } catch (e) {
    res.status(404).send(e)
  }
})

module.exports = router
