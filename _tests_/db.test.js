import React from 'react';
import Photo from '../db/index.js';

describe('Database should be returning info correctly', () => {

  test('Confirm we have a 1000th photo', done => {
    Photo.find({_id: 1000}).exec(function(err, success) {
      if (err) {
        console.log('Error finding 1000th photo', err);
      } else {
        expect(success[0]._id).toBe(1000);
        done();
      }
    })
  });

  test('One photo should have the correct properties', () => {
    expect.assertions(4);
    return Photo.find({_id: 102}).exec()
      .then(data => {
        expect(data[0]._id).toBe(102);
        expect(data[0].propertyId).toBe(38);
        expect(data[0].photoURL).toBe('https://s3-us-west-2.amazonaws.com/fec1-photo-gallery/P102.jpg');
        expect(typeof data[0].photoURL).toBe('string');
      })
    })
  
});
