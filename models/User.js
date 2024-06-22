const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/finura");

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    contact: { type: Number },
    cart: { type: Array, default: [] },
    isAdmin: { type: Boolean },
    orders: { type: Array, default: [] },
    profilePhoto: { type: String }
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;