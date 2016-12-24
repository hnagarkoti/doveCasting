import React from 'react';
import { browserHistory } from 'react-router'
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';

import VideoImg from '../img/video-img.jpg';

// import '../styles/ReactHtml5Video.css';
// import '../js/ReactHtml5Video.js';

class LandingPage extends React.Component {
  render(){
    return(
        <div>
          <h1>Dove Casting</h1>

      </div>
    );
  }
};



export class Home extends React.Component {
  constructor(){
    super();
  }
  register(){
    browserHistory.push('/timeline');
  }
  render(){
    return(
        <div>
          <LandingPage />
              <button onClick={this.register} >register</button>
        </div>
    );
  }
}
