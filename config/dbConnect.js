const mongoose = require('mongoose');
const chalk = require('chalk');

// const dbugger = require('debug')("development:mongoose");

// SET -> $env:DEBUG="development:*"
// REMOVE -> Remove-Item Env:DEBUG

mongoose.connect(`${process.env.MONGODB_URI}/finura`)
    .then(() => {
        console.log(chalk.hex('#ffd000').underline.bold("--- DATABASE CONNECTED SUCCESSFULLY! ---"));
        // dbugger("--- DATABASE CONNECTED SUCCESSFULLY! ---");
    })
    .catch((err) => {
        console.log(chalk.hex('#ff0000').bold("~ Error occured during connecting the database!"));
        console.error(err);
        // dbugger(err);
    });

module.exports = mongoose.connection;