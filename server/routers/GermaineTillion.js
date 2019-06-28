const express = require('express')
const GermaineTillion = require('../models/GermaineTillion')
const router = new express.Router()

router.post('/api/deux-resistantes-deux-destins-differents/germaine-tillion', async (req, res) => {
  const germaineTillion = new GermaineTillion(req.body)

  try {
    await germaineTillion.save()
    res.status(201).send(germaineTillion)
  } catch (e) {
    res.status(404).send(e)
  }
})

router.get('/api/deux-resistantes-deux-destins-differents/germaine-tillion', async (req, res) => {
  try {
    const getgermaineTillion = await GermaineTillion.find({})
    res.status(201).send(getgermaineTillion)
  } catch (e) {
    res.status(404).send(e)
  }
})

module.exports = router
