const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Photo = require('./index.js');

const getRandomId = function(min, max) {
  let min = Math.ceil(min);
  let max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getPhotoData = function(num) {
  let data = [];

  for (var i = 1; i <= num; i++) {
    let photo = {
      _id: i,  
      propertyId: getRandomId(1, 100),
      photoURL: `https://s3-us-west-2.amazonaws.com/fec1-photo-gallery/P${i}.jpg`
    }
    data.push(photo);
  }
  return data;
}

const photoData = getPhotoData(1045);

Photo.create(photoData);
