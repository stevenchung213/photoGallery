import React from 'react'

const Photo = ({ photos, photo }) => {
  if (photos.length && photo >= 0) {
    return (
      <div>
        <img className="main-photo" src={photos[photo].photoURL}/>
        <img className="next-photo" src={photos[photo + 1].photoURL}/>
      </div>
    );
  } else {
    return (
      <div>Loading</div>
    );
  }
}

export default Photo;
