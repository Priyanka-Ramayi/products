const express = require('express')
const categories = require('../models/categories')

const router = new express.Router()

router.post('/categories', async(req, res, next)=>{ // create new category
    const newCategory = new categories(req.body)
    try{
        await newCategory.save()
        res.send({newCategory})
    }catch(err){
        return next(err)
    }

})

module.exports = router;