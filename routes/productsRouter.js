const express = require('express');
const productModel = require('../models/Product');

const upload = require('../config/multerConfig');
const router = express.Router();

router.get("/", function (req, res) {
    res.send("PRODUCTS ROUTE WORKING");
});

router.post("/create", upload.single("image"), async function (req, res) {
    try {
        console.log(req.body);
        const { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

        const createdProduct = await productModel.create({
            image: req.file.buffer,
            name, price, discount, bgColor: bgcolor, panelColor: panelcolor, textColor: textcolor
        });

        console.log({createdProduct});
        
        req.flash("success", "Product created successfully!");
        res.redirect('/owners/admin');
        // res.status(201).send(createdProduct);
    }
    catch (err) {
        res.send(err.message);
    }
});

module.exports = router;