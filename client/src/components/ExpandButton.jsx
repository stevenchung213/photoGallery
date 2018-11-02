import React from 'react';
import $ from 'jquery';

const ExpandButton = ({ photos, photo }) => {
  if (photos.length && photo === 0) {
    console.log(photos);
    return (
      <div className="expand">
      <button className="expand">{photo + 1}/{photos.length}</button>
    </div>
    );
  } else {
    return (
      <button>Loading</button>
    );
  }
}
 
export default ExpandButton;
