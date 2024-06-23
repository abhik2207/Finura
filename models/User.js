const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    contact: { type: Number },
    password: { type: String },
    cart: { type: Array, default: [] },
    isAdmin: { type: Boolean },
    orders: { type: Array, default: [] },
    profilePicture: { type: String }
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;