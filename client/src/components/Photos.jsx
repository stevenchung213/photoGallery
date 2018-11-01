import React from 'react';
import $ from 'jquery';
import Enlarge from './Enlarge.jsx';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'gallery',
      currentPropertyId: null,
      photos: []
    };
  }
  
  componentDidMount() {
    let propId = Number(window.location.pathname.replace(/\//, ''));
    if (propId > 0 && propId <= 100) {
      $.get('/photos/' + propId, result => {
        this.setState({currentPropertyId: propId, photos: result});
      })
    } else {
      $.get('/photos', result => {
        this.setState({currentPropertyId: result[0]})
      }, 'json');
    }
  }

  render () {
    if (this.state.photos.length) {
      return (
        <div>
          <h1>Photo Gallery</h1>
          <div><img src={this.state.photos[0].photoURL}/></div>
        </div>
      )
    } else {
      return (
        <div>Loading</div>
      )
    }
  }
}

export default Photos;
