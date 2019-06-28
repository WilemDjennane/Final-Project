const express = require('express')
const LesServicesSecretsPendantLaGuerre = require('../models/LesServicesSecretsPendantLaGuerre')
const router = new express.Router()

router.post('/api/les-services-secrets-pendant-la-guerre', async (req, res) => {
  const lesServicesSecretsPendantLaGuerre = new LesServicesSecretsPendantLaGuerre(req.body)

  try {
    await lesServicesSecretsPendantLaGuerre.save()
    res.status(201).send(lesServicesSecretsPendantLaGuerre)
  } catch (e) {
    res.status(404).send(e)
  }
})

router.get('/api/les-services-secrets-pendant-la-guerre', async (req, res) => {
  try {
    const getLesServicesSecretsPendantLaGuerre = await LesServicesSecretsPendantLaGuerre.find({})
    res.status(201).send(getLesServicesSecretsPendantLaGuerre)
  } catch (e) {
    res.status(404).send(e)
  }
})

module.exports = router
