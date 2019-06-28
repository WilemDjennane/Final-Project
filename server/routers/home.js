const express = require('express')
const Home = require('../models/home')
const router = new express.Router()

router.post('/api/home', async (req, res) => {
  const postHome = new Home(req.body)

  try {
    await postHome.save()
    res.status(201).send(postHome)
  } catch (e) {
    res.status(404).send(e)
  }
})

router.get('/api', async (req, res) => {

})

module.exports = router
