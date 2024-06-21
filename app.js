const express = require('express');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    console.log(chalk.hex('#03befc').bold("~ Default API fetched!"));
    res.send('API is working!');
});

app.listen(8080, () => {
    console.log(chalk.hex('#ffd000').underline.bold("--- SERVER RUNNING AT PORT 8080 ---"));
});