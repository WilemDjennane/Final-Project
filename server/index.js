const express = require('express')
require('./db/mongoose')
const consola = require('consola')
const cors = require('cors')
const { Nuxt, Builder } = require('nuxt')
const config = require('../nuxt.config.js')
const userRouter = require('./routers/home')
const introductionRouter = require('./routers/introduction')


const app = express()

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(introductionRouter)

// Import and Set Nuxt.js options
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config)

    const { host, port } = nuxt.options.server

    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    } else {
        await nuxt.ready()
    }

    // Give nuxt middleware to express
    app.use(nuxt.render)

    // Listen the server
    app.listen(port, host)
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    })
}

start()