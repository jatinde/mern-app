const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

const users = require('./routes/api/users')
const posts = require('./routes/api/posts')
const profile = require('./routes/api/profile')

const app = express()

//app.use(bodyParser())

const db = require('./config/keys').mongoURI

mongoose.connect(db)
    .then(() => console.log("Connected Successfully"))
    .catch(err => console.error(err))

app.get("/", (req, res) => res.send("Hello"))

app.use('/api/users', users)
app.use('/api/posts', posts)
app.use('/api/profile', profile)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`started server at ${port}`)
})