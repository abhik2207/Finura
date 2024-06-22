const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image: { type: String },
    name: { type: String },
    price: { type: Number },
    discount: { type: Number, default: 0 },
    bgColor: { type: String },
    panelColor: { type: String },
    textColor: { type: String }
});

const ProductModel = mongoose.model('Product', productSchema);
module.exports = ProductModel;