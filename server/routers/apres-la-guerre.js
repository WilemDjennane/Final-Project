const express = require('express')
const ApresLaGuerre = require('../models/apres-la-guerre')
const router = new express.Router()

router.post('/api/apres-la-guerre', async (req, res) => {
  const apresLaGuerre = new ApresLaGuerre(req.body)

  try {
    await apresLaGuerre.save()
    res.status(201).send(apresLaGuerre)
  } catch (e) {
    res.status(404).send(e)
  }
})

router.get('/api/apres-la-guerre', async (req, res) => {
  try {
    const getapresLaGuerre = await ApresLaGuerre.find({})
    res.status(201).send(getapresLaGuerre)
  } catch (e) {
    res.status(404).send(e)
  }
})

module.exports = router
