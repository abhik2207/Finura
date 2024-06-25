const userModel = require('../models/User');
const generateToken = require('../utils/generateToken');
const jwt = require('jsonwebtoken');

module.exports = async function isLoggedIn(req, res, next) {
    if(!req.cookies.token) {
        req.flash("error", "You need to login first!");
        return res.redirect('/');
    }

    try {
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

        const user = await userModel.findOne({email: decoded.email}).select("-password");
        req.user = user;
        next();
    }
    catch(err) {
        console.log(err);
        req.flash("error", "Something went wrong!");
        res.redirect('/');
    }
}
