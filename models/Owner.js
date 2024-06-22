const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    contact: { type: Number },
    password: { type: String },
    products: { type: Array, default: [] },
    profilePhoto: { type: String },
    gstNumber: { type: String }
});

const OwnerModel = mongoose.model('Owner', ownerSchema);
module.exports = OwnerModel;