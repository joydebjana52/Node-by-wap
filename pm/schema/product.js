const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discount: Number
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;