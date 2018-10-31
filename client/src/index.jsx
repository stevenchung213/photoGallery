import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };

    this.getPhotos = this.getPhotos.bind(this);
  }

  getPhotos() {
    $.ajax({
      method: 'GET',
      url: '/api/photogalleries',
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
