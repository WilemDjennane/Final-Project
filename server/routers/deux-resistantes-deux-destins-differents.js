const express = require('express')
const DeuxResistantes = require('../models/deux-resistantes-deux-destins-differents')
const router = new express.Router()

router.post('/api/deux-resistantes-deux-destins-differents', async (req, res) => {
  const deuxResistantes = new DeuxResistantes(req.body)

  try {
    await deuxResistantes.save()
    res.status(201).send(deuxResistantes)
  } catch (e) {
    res.status(404).send(e)
  }
})

router.get('/api/deux-resistantes-deux-destins-differents', async (req, res) => {
  try {
    const getdeuxResistantes = await DeuxResistantes.find({})
    res.status(201).send(getdeuxResistantes)
  } catch (e) {
    res.status(404).send(e)
  }
})

module.exports = router
