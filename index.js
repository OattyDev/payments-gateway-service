const express = require('express')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT

const app = express()
app.use(cors())

app.use('/', (req, res) => {
    return res.json({ message: "hello" })
})

app.listen(port, () => {
    console.log(`connected: ${port}`)
})