import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPropertyId: 0,
      photos: []
    };
    
    this.getRandomId = this.getRandomId.bind(this);
    this.getProperty = this.getProperty.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
  }

  getRandomId(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getProperty() {
    var propertyId = this.getRandomId(1, 100);
    this.setState({currentPropertyId: propertyId});
  }
  
  getPhotos() {
    $.ajax({
      method: 'GET',
      url: '/api/photogalleries/' + this.props.currentPropertyId,
      success: (res) => {
        this.setState({photos: res})
      },
      error: (err) => {
        console.log('Error retrieving photos', err)
      },
      complete: () => {
        console.log('GET request complete');
      }
    })
  }

  render () {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
