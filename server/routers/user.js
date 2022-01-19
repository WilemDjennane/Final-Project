const express = require('express')
const multer = require('multer')
const User = require('../models/user')
const router = new express.Router()

router.post('/user', async (req, res) => {
  const user = new User(req.body)

  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({ user, token })
  } catch (e) {
    res.status(400).send(e)
  }
})

router.post('/user/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.send({ user, token })
  } catch (error) {
    res.status(400).send(error)
  }
})

router.get('/user/me', async (req, res) => {
  res.send(req.user)
})

router.get('/api/users', async (req, res) => {
  try {
    const findAllUsers = await User.find({})
    res.send(findAllUsers)
  } catch (error) {
    res.status(404).send()
  }
})

router.get('/user/:id', async (req, res) => {
  const _id = req.params.id

  try {
    const user = await User.findById(_id)

    if (!user) {
      return res.status(404).send()
    }
  } catch (e) {
    res.status(500).send()
  }
})

router.patch('/api/user/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id)

    if (!user) {
      return res.status(404).send()
    }

    res.send(user)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.delete('/user/:id', async (req, res) => {
  try {
    const findByIdAndDelete = await User.findByIdAndDelete(req.params.id)

    if (!findByIdAndDelete) {
      return res.status(404).send()
    }

    res.send(findByIdAndDelete)
  } catch (e) {
    res.status(500).send(e)
  }
})

const upload = multer({
  dest: 'assets/audios',
  limits: {
    fileSize: 100000000
  }
})

router.post('/user/me/avatar', upload.single('avatar'), async (req, res) => {
  await req.file
  res.send(req.file)
})

module.exports = router
