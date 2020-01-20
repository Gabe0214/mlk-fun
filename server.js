const express = require('express')
const cors = require('cors')
const server = express()
const userRouter = require('./users/users-router')



server.use(express.json())
server.use(cors())

server.use('/api/users', userRouter)

module.exports = server;