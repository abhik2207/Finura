const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    name: { type: String, required: [true, "Please provide a name"] },
    email: { type: String, required: [true, "Please provide a email address"] },
    contact: { type: Number, required: [true, "Please provide a contact number"] },
    password: { type: String, required: [true, "Please provide a password"] },
    products: { type: Array, default: [] },
    profilePicture: { type: String },
    gstNumber: { type: String }
});

const OwnerModel = mongoose.model('Owner', ownerSchema);
module.exports = OwnerModel;