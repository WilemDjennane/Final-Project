const express = require('express')
const Menu = require('../models/menu')
const router = new express.Router()

router.post('/api/menu', async (req, res) => {
  const postMenu = new Menu(req.body)

  try {
    await postMenu.save()
    res.status(201).send(postMenu)
  } catch (e) {
    res.status(404).send(e)
  }
})

router.get('/api/menu', async (req, res) => {
  try {
    const getpostMenu = await Menu.find({})
    res.status(201).send(getpostMenu)
  } catch (e) {
    res.status(404).send(e)
  }
})

module.exports = router
