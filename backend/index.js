const express = require('express')
const routes = require('./routes')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
  res.send('Server Ok!')
})

routes(app)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})