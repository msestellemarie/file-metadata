const path = require('path');
const multer = require('multer');
const upload = multer();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'static')));

app.listen(port);
console.log(`Now listening on port ${port}`);

app.post('/file-size', upload.single('sizeCheck'), function(req, res){
  res.send({
    size: req.file.size
  });
});
