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
        console.log(this.state.photos);
      })
    } else {
      $.get('/photos', result => {
        this.setState({currentPropertyId: result[0]})
      }, 'json');
    }
  }

  render () {
    return (
      <div>
        <h1>Photo Gallery</h1>
        <h2>This is property {this.state.currentPropertyId}</h2>
      </div>
    )
  }
}

export default Photos;
