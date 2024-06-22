const express = require('express');
const chalk = require('chalk');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser);
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    console.log(chalk.hex('#03befc').bold("~ Default API fetched!"));
    res.send('API is working!');
});

app.listen(8080, () => {
    console.log(chalk.hex('#ffd000').underline.bold("--- SERVER RUNNING AT PORT 8080 ---"));
});