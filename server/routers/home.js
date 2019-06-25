const express = require('express')
const multer = require('multer')
const User = require('../models/user')
const router = new express.Router()

router.post('/home', async(req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/home/login', async(req, res) => {
    try {
        const findByCredentials = await User.findByCredentials(req.body.email, req.body.password)
        const userToken = await user.generateAuthToken()
        res.send({ findByCredentials, userToken })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/home', async(req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        res.status(404).send()
    }
})

router.get('/home/:id', async(req, res) => {
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

router.patch('/home/:id', async(req, res) => {
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

router.delete('/home/:id', async(req, res) => {
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
    dest: 'assets/images',
    limits: {
        fileSize: 100000000
    }
})

router.post('/home/me/avatar', upload.single('avatar'), async(req, res) => {
    req.file
    console.log(req.file);
    res.send(req.file)
})

module.exports = router