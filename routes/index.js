const express = require('express');
const isLoggedIn = require('../middlewares/isLoggedIn');
const productModel = require('../models/Product');

const router = express.Router();

router.get('/', (req, res) => {
    let error = req.flash("error");
    res.render('index.ejs', { error });
});

router.get('/shop', isLoggedIn, async (req, res) => {
    const allProducts = await productModel.find();
    res.render('shop.ejs', { products: allProducts });
});

module.exports = router;