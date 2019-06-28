const express = require('express')
require('./db/mongoose')
const consola = require('consola')
const cors = require('cors')
const { Nuxt, Builder } = require('nuxt')
const config = require('../nuxt.config.js')
const userRouter = require('./routers/user')
const homeRouter = require('./routers/home')
const introductionRouter = require('./routers/introduction')
const menuRouter = require('./routers/menu')
const DeuxResistantesDeuxDestinsDifferentsRouter = require('./routers/deux-resistantes-deux-destins-differents')
const SeBattrePoursonPaysRouter = require('./routers/se-battre-pour-son-pays')
const lioudmilaPavlichenkoRouter = require('./routers/lioudmilaPavlichenko')
const simoneSegouinRouter = require('./routers/simoneSegouin')
const apresLaGuerreRouter = require('./routers/apres-la-guerre')
const germaineTillionRouter = require('./routers/GermaineTillion')
const SophieSchollRouter = require('./routers/SophieScholl')
const LesServicesSecretsPendantLaGuerreRouter = require('./routers/LesServicesSecretsPendantLaGuerre')
const EventTillionRouter = require('./routers/eventtillion')
const EventlioudmilaRouter = require('./routers/eventlioudmila')

const app = express()

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(homeRouter)
app.use(introductionRouter)
app.use(menuRouter)
app.use(DeuxResistantesDeuxDestinsDifferentsRouter)
app.use(SeBattrePoursonPaysRouter)
app.use(lioudmilaPavlichenkoRouter)
app.use(simoneSegouinRouter)
app.use(apresLaGuerreRouter)
app.use(germaineTillionRouter)
app.use(SophieSchollRouter)
app.use(LesServicesSecretsPendantLaGuerreRouter)
app.use(EventTillionRouter)
app.use(EventlioudmilaRouter)

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
