const express = require('express')
const Product = require('../models/products')

const router = new express.Router()

router.post('/products', async(req, res, next)=>{ //add new product
    const newProduct = new Product(req.body)
    try{
        await newProduct.save()
        res.send({newProduct})
    }catch(err){
        return next(err)
    }

})

router.delete('/products/:id',async (req, res, next)=>{ //delete product and its associated categories
    try{
        let Products = await Product.findOneAndDelete(req.params.id);
        res.send(Products);
    }catch(err){
        return next(err)
    }
})

module.exports = router;