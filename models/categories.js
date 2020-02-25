const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({ //define mongoose schema
    name:{
        type:String,
        required:true,
        trim: true
    },
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'products' //add reference to products
    }
})

const categories = mongoose.model('categories', categoriesSchema);

module.exports = categories