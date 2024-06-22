const express = require('express');
const chalk = require('chalk');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config()

const dbConnection = require('./config/dbConnect');

const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    console.log(chalk.hex('#03befc').bold("~ Default API fetched!"));
    res.send('API is working!');
});

app.use("/users", usersRouter);
app.use("/owners", ownersRouter);
app.use("/products", productsRouter);

app.listen(process.env.PORT, () => {
    console.log(chalk.hex('#ffd000').underline.bold(`--- SERVER RUNNING AT PORT ${process.env.PORT} ---`));
});