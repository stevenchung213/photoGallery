import React from 'react';
import $ from 'jquery';
import Photo from './Photo.jsx';
import ExpandButton from './ExpandButton.jsx';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'gallery',
      currentPropertyId: null,
      photos: [],
      currentPhoto: null,
      isExpanded: false
    };

    this.goToNextPhoto = this.goToNextPhoto.bind(this);
    this.goToPrevPhoto = this.goToPrevPhoto.bind(this);
    this.expandPhoto = this.expandPhoto.bind(this);
    this.resetPhoto = this.resetPhoto.bind(this);
  }
  
  componentDidMount() {
    let propId = Number(window.location.pathname.replace(/\//, ''));
    if (propId > 0 && propId <= 100) {
      $.get('/photos/' + propId, result => {
        this.setState({view: 'gallery', currentPropertyId: propId, photos: result, currentPhoto: 0, isExpanded: false});
      })
    } else {
      $.get('/photos', result => {
        this.setState({currentPropertyId: result[0]})
      }, 'json');
    }
  }

  goToNextPhoto() {
    if (this.state.currentPhoto === this.state.photos.length - 1) {
      this.setState({currentPhoto: 0});
    } else {
      this.setState({currentPhoto: this.state.currentPhoto + 1});
    }
  }

  goToPrevPhoto() {
    if (this.state.currentPhoto === 0) {
      this.setState({currentPhoto: this.state.photos.length - 1});
    } else {
      this.setState({currentPhoto: this.state.currentPhoto - 1});
    }
  }

  expandPhoto() {
    this.setState({view: 'expand', photos: this.state.photos, currentPhoto: this.state.currentPhoto, isExpanded: true});
  }

  resetPhoto() {
    this.setState({view: 'gallery', photos: this.state.photos, currentPhoto: this.state.currentPhoto, isExpanded: false});
  }

  render() {
    if (this.state.photos.length) {
      
      if (this.state.view === 'gallery') { 
        return (
          <div className="gallery">
            <div className="button-group">
             <LeftArrow handleClick={this.goToPrevPhoto} photos={this.state.photos} currentPhoto={this.state.currentPhoto}/>
             <ExpandButton handleClick={this.expandPhoto} photos={this.state.photos} photo={this.state.currentPhoto}/>
            </div>

            <div className="gallery-slideshow">
              <Photo photos={this.state.photos} photo={this.state.currentPhoto}/>
            </div>    

            <RightArrow handleClick={this.goToNextPhoto} photos={this.state.photos} photo={this.state.currentPhoto}/>
          </div>
        );

      } else if (this.state.view === 'expand') {
        return (
          <div className="expanded">
            <div className="button-group">
              <LeftArrow handleClick={this.goToPrevPhoto} photos={this.state.photos} currentPhoto={this.state.currentPhoto}/>
              <ExpandButton handleClick={this.resetPhoto} photos={this.state.photos} photo={this.state.currentPhoto}/>
            </div>

            <div className="expanded-slideshow">
              <Photo photos={this.state.photos} photo={this.state.currentPhoto}/>
            </div>    

            <RightArrow handleClick={this.goToNextPhoto} photos={this.state.photos} photo={this.state.currentPhoto}/>
          </div>
        );
      }

    } else {
      return (
        <div>Loading</div>
      );
    }
  }
}

export default Gallery;
