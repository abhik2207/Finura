const express = require('express');
const ownerModel = require('../models/Owner');

const router = express.Router();

router.get("/", function (req, res) {
    res.send("OWNERS");
});

if(process.env.NODE_ENV === "development") {
    router.post("/create", async function (req, res) {
        const existingOwners = await ownerModel.find();

        if(existingOwners.length > 0) {
            return res.status(503).send("An owner already exists!");
        }

        const {name, email, contact, password} = req.body;

        try {
            const createdOwner= await ownerModel.create({
                name,
                email,
                contact,
                password
            });
            
            res.status(201).send(createdOwner);
        }
        catch (err) {
            res.status(400).send(err);
        }
    });
}

module.exports = router;