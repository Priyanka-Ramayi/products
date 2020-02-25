const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017,localhost:27018,localhost:27019/product?replicaSet=rs', {// create mongo connection
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})