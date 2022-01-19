const express = require('express')
const SeBattrePoursonPays = require('../models/se-battre-pour-son-pays')
const router = new express.Router()

router.post('/api/se-battre-pour-son-pays', async (req, res) => {
  const seBattrePoursonPays = new SeBattrePoursonPays(req.body)

  try {
    await seBattrePoursonPays.save()
    res.status(201).send(seBattrePoursonPays)
  } catch (e) {
    res.status(404).send(e)
  }
})

router.get('/api/se-battre-pour-son-pays', async (req, res) => {
  try {
    const getseBattrePoursonPays = await SeBattrePoursonPays.find({})
    res.status(201).send(getseBattrePoursonPays)
  } catch (e) {
    res.status(404).send(e)
  }
})

module.exports = router
