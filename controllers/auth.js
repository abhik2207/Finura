const userModel = require('../models/User');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');

module.exports.registerUser = async function (req, res) {
    const { name, email, contact, password } = req.body;

    try {
        const userExists = await userModel.findOne({ email: email });

        if (userExists) {
            req.flash("error", "You already have an account, please login!");
            return res.redirect('/');
            // return res.status(401).send("You already have an account, please login!");
        }
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hashedPassword) {
                if (err) {
                    return res.status(500).send(err.message);
                }
                else {
                    const createdUser = await userModel.create({
                        name,
                        email,
                        contact,
                        password: hashedPassword
                    });

                    const token = generateToken(createdUser);
                    res.cookie("token", token);
                    res.status(201).send(createdUser);
                }
            });
        });
    }
    catch (err) {
        res.status(400).send(err);
    }
}

module.exports.loginUser = async function (req, res) {
    const { email, password } = req.body;

    const existingUser = await userModel.findOne({ email: email });

    if (!existingUser) {
        req.flash("error", "Invalid credentials!");
        return res.redirect('/');
        // return res.status(401).send("Invalid credentials!");
    }

    bcrypt.compare(password, existingUser.password, function (err, result) {
        if (err) {
            return res.sendStatus(500);
        }
        if (result) {
            const token = generateToken(existingUser);
            res.cookie("token", token);
            res.redirect('/shop');
            // res.status(200).send(token);
        }
        else {
            req.flash("error", "Invalid credentials!");
            return res.redirect('/');
            // return res.status(401).send("Invalid credentials!");
        }
    });
}

module.exports.logoutUser = function (req, res) {
    res.cookie("token", "");
    res.redirect("/");
}