const express = require('express');
const app = express();

app.use((req, re, next) => {
    re.status(200).json({
        "message": "it works!",
    });
});

module.exports = app;