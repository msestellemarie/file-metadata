const path = require('path');
const multer = require('multer');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'static')));

app.listen(port);
console.log(`Now listening on port ${port}`);
