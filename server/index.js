const express = require('express');
const bodyParser = require('body-parser');
const PhotoGallery = require('../db/index.js');
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client.dist'));

// Photos.Photos.create({
//   _id: 1,
//   photoURL: 'YE BOI!'
// }, () => {});

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
