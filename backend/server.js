const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const routes = require('./routes/index')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use('/api', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})