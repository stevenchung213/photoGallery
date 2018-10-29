const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { PhotoGallery } = require('./index.js');

var getRandomId = function(min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var getPhotoData = function(num) {
  var data = [];

  for (var i = 1; i <= num; i++) {
    var photo = {
      _id: i,  
      propertyId: getRandomId(1, 100),
      photoURL: `https://s3-us-west-2.amazonaws.com/fec1-photo-gallery/P${i}.jpg`
    }
    data.push(photo);
  }
  return data;
}

var photoGalleryData = getPhotoData(1045);

PhotoGallery.create(photoGalleryData);
