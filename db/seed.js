const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Photo = require('./index.js');

const getRandomId = function(min, max) {
  let minId = Math.ceil(min);
  let maxId = Math.floor(max);
  return Math.floor(Math.random() * (maxId - minId + 1)) + minId;
}

const getPhotoData = function(num) {
  let data = [];

  for (let i = 1; i <= num; i++) {
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
