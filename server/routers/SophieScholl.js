const express = require('express')
const SophieScholl = require('../models/SophieScholl')
const router = new express.Router()

router.post('/api/deux-resistantes-deux-destins-differents/sophie-scholl', async (req, res) => {
  const sophieScholl = new SophieScholl(req.body)

  try {
    await sophieScholl.save()
    res.status(201).send(sophieScholl)
  } catch (e) {
    res.status(404).send(e)
  }
})

router.get('/api/deux-resistantes-deux-destins-differents/sophie-scholl', async (req, res) => {
  try {
    const getSophieScholl = await SophieScholl.find({})
    res.status(201).send(getSophieScholl)
  } catch (e) {
    res.status(404).send(e)
  }
})

module.exports = router
