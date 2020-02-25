const express = require('express');
require('./db/mongoose')
const port = process.env.PORT || 3000
const productRouter = require('./routers/products')
const categoryRouter = require('./routers/categories')

const app = express()

app.use(express.json())

app.use(productRouter) // middleware for products
app.use(categoryRouter) // middleware for category

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})