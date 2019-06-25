const express = require('express')
const Home = require('../models/home')
const router = new express.Router()

router.post('/new', async(req, res) => {
    const home = new Home(req.body)

    try {
        await home.save()
        res.status(201).send(home)
    } catch (e) {
        res.status(404).send(e)
    }
})


router.get('/new', async(req, res) => {
    try {
        const homies = await Home.find({})
        res.send(homies)
    } catch (e) {
        res.status(404).send()
    }
})

module.exports = router