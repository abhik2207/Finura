const express = require('express');
const chalk = require('chalk');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const flash = require('connect-flash');
const path = require('path');
require('dotenv').config();

const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');
const indexRouter = require('./routes/index');

const dbConnection = require('./config/dbConnect');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET
}));
app.use(flash());


app.use('/', indexRouter);

app.use("/users", usersRouter);
app.use("/owners", ownersRouter);
app.use("/products", productsRouter);

// SET -> $env:NODE_ENV="development"
// REMOVE -> Remove-Item Env:NODE_ENV

app.listen(process.env.PORT, () => {
    console.log(chalk.hex('#ffd000').underline.bold(`--- SERVER RUNNING AT PORT ${process.env.PORT} ---`));
    console.log(chalk.hex('#00ff00').underline.bold(`--- ${process.env.NODE_ENV} mode ---`));
});