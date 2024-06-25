const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, minLength: 3, maxLength: 50, trim: true, required: [true, "Please provide a name"] },
    email: { type: String, required: [true, "Please provide a email address"] },
    contact: { type: Number, required: [true, "Please provide a contact number"] },
    password: { type: String, required: [true, "Please provide a password"] },
    cart: { type: Array, default: [] },
    orders: { type: Array, default: [] },
    profilePicture: { type: String }
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;