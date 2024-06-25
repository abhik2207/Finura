const express = require('express');
const isLoggedIn = require('../middlewares/isLoggedIn');
const productModel = require('../models/Product');
const userModel = require('../models/User');
const { platformFee, shippingCost } = require('../utils/CONSTANTS');


const router = express.Router();

router.get('/', (req, res) => {
    let error = req.flash("error");
    res.render('index.ejs', { error, loggedin: false });
});

router.get('/shop', isLoggedIn, async (req, res) => {
    const allProducts = await productModel.find();
    const success = req.flash("success");
    res.render('shop.ejs', { products: allProducts, success: success });
});

router.get('/addtocart/:productid', isLoggedIn, async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.user.email });
        user.cart.push(req.params.productid);
        await user.save();
    }
    catch (err) {
        console.log(err);
    }

    req.flash("success", "Added to cart!");
    res.redirect("/shop");
});

router.get('/cart', isLoggedIn, async (req, res) => {
    const user = await userModel.findOne({ email: req.user.email }).populate('cart');

    res.render('cart.ejs', { user, platformFee, shippingCost });
});

// router.get('/logout', isLoggedIn, (req, res) => {
//     res.render('shop');
// });

module.exports = router;