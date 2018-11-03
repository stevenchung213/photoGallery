import React from 'react'

const Photo = ({ photos, photo }) => {
  if (photos.length && photo >= 0) {
    return (
      <div>
        <img className="main-photo" src={photos[photo].photoURL}/>
      </div>
    );
  } else {
    return (
      <div>Loading</div>
    );
  }
}

export default Photo;
