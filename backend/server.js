import express from 'express'
import { config } from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import products from './data/products.js'
config()
connectDB()

const app = express()
app.get('/', (_req, res) => {
    res.send('api is running......... ')
})
app.get('/api/products', (_req, res) => {
    res.json(products)
})
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
)
