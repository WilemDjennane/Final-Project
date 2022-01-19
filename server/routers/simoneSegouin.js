const express = require('express')
const SimoneSegouin = require('../models/simoneSegouin')
const router = new express.Router()

router.post('/api/se-battre-pour-son-pays/simone-segouin', async (req, res) => {
  const simoneSegouin = new SimoneSegouin(req.body)

  try {
    await simoneSegouin.save()
    res.status(201).send(simoneSegouin)
  } catch (e) {
    res.status(404).send(e)
  }
})

router.get('/api/se-battre-pour-son-pays/simone-segouin', async (req, res) => {
  try {
    const getSimoneSegouin = await SimoneSegouin.find({})
    res.status(201).send(getSimoneSegouin)
  } catch (e) {
    res.status(404).send(e)
  }
})

module.exports = router
