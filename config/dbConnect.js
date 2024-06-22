const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose.connect("mongodb://127.0.0.1:27017/finura")
    .then(() => {
        console.log(chalk.hex('#ffd000').underline.bold("--- DATABASE CONNECTED SUCCESSFULLY! ---"));
    })
    .catch(() => {
        console.log(chalk.hex('#ff0000').bold("~ Error occured during connecting the database!"));
        console.error(err);
    });

module.exports = mongoose.connection;