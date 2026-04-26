import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import http from 'http'
import { connectDb } from './lib/db.js'

const app = express()

const  server = http.createServer(app)

// Middleware setup

app.use(express.json({limit: "4mb"}))

app.use(cors())

app.use('/api/status', (req, res) => {
    res.send('Server is live');
})

// connect to mongodb
await connectDb()

const PORT = process.env.PORT || 5000


server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})