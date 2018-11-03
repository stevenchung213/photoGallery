import React from 'react'

const Photo = ({ photos, photo }) => {
  if (photos.length && photo >= 0) {
    if (photo === photos.length - 1) {
      return (
        <div>
          {/* <img className="prev-photo" src={photos[photo - 1].photoURL}/> */}
          <img className="main-photo" src={photos[photo].photoURL}/>
          {/* <img className="next-photo" src={photos[0].photoURL}></img> */}
        </div>
      );
    } else if (photo === 0) {
      return (
        <div>
          {/* <img className="prev-photo" src={photos[photos.length - 1].photoURL}/> */}
          <img className="main-photo" src={photos[photo].photoURL}/>
          {/* <img className="next-photo" src={photos[photo + 1].photoURL}></img> */}
        </div>
      );
    } else {
      return (
        <div>
          {/* <img className="prev-photo" src={photos[photo - 1].photoURL}/> */}
          <img className="main-photo" src={photos[photo].photoURL}/>
          {/* <img className="next-photo" src={photos[photo + 1].photoURL}></img> */}
        </div>
      );
    }
  } else {
    return (
      <div>Loading</div>
    );
  }
}

export default Photo;
