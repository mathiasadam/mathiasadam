// "env vars"
const appName = 'MAD Graphism'
const hostname = 'madgraphism.com'
const httpPort = process.env.PORT || 8080

// production server
const compression = require('compression')
const express = require('express')
const forceHttps = require('express-force-ssl')
const helmet = require('helmet')
const http = require('http')
const path = require('path')

// express public assets path
const publicPath = path.join(__dirname, '../public')

// express server
const app = express()

// force https
if (!!process.env.FORCE_HTTPS && process.env.FORCE_HTTPS !== 'false') {
  app.use(forceHttps)
}

// secure http headers
app.use(helmet())

// gzip compression
app.use(compression())

// serve static assets
app.use(express.static(publicPath))

// 404
app.use((req, res, next) => {
  res.status(404)

  // falo HTMLi
  if (req.accepts('html')) {
    res.sendFile(path.join(publicPath, '404.html'))
    return
  }

  // falo JSONi
  if (req.accepts('json')) {
    res.send({ code: 404, message: 'Not found' })
    return
  }

  // puta que pario falo nada! que isso genti
  res.type('txt').send('404 Not found!')
})

// spawn the HTTP server
const server = http.createServer(app)
server.listen(httpPort, err => console.log(err ? err : `> ${appName} listening on port ${httpPort}`))
