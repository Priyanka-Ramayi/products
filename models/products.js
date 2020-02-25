const mongoose = require('mongoose');
const category = require('./categories')

const productSchema = mongoose.Schema({ //define mongoose schema
    name:{
        type:String,
        trim:true
    }
})

// Delete product categories when product is deleted
productSchema.pre('findOneAndDelete', async function (next) {
    const product = this
    await category.deleteMany({ owner: product._id })
    next()
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;