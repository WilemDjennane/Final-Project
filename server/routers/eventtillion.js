const express = require('express')
const EventGermaineTillion = require('../models/eventtillion')
const router = new express.Router()

router.post('/api/deux-resistantes-deux-destins-differents/germaine-tillion/germaine-event', async(req, res) => {
    const eventGermaineTillion = new EventGermaineTillion(req.body)

    try {
        await eventGermaineTillion.save()
        res.status(201).send(eventGermaineTillion)
    } catch (e) {
        res.status(404).send(e)
    }
})

router.get('/api/deux-resistantes-deux-destins-differents/germaine-tillion/germaine-event', async(req, res) => {
    try {
        const getEventgermaineTillion = await EventGermaineTillion.find({})
        res.status(201).send(getEventgermaineTillion)
    } catch (e) {
        res.status(404).send(e)
    }
})

module.exports = router