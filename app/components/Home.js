import React from 'react';
import { browserHistory } from 'react-router'
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';
import styles from '../styles/App.css';
import VideoImg from '../img/video-img.jpg';
import FaceImg from '../img/facebook.png';
import TwitImg from '../img/twitter.png';
import MailImg from '../img/gmail.png';

// import '../styles/ReactHtml5Video.css';
// import '../js/ReactHtml5Video.js';

class LandingPage extends React.Component {
  render(){
    return(
        <div>
          <h1>Dove Casting</h1>
          <p>Dove is a brand for real women. Everything we do,
           everything we believe in begins and ends with real 
           women. We celebrate diversity in beauty, and we are 
           always looking for real women with inspiring stories 
           to feature on our campaigns. If you want to register 
           to be considered for casting please click on the 
           Register button below.</p>
           <h5>What can you expect from the casting process?</h5>
           <img className={styles.videoimg} src={VideoImg} />
      </div>
    );
  }
};

class BottomBar extends React.Component {
  render(){
    return(
      <span className={styles.soicalicons}>
        <span className={styles.share}>share</span>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={FaceImg} className={styles.imgicons}/>
        </a>
        <a href="https://twitter.com/" target="_blank">
          <img src={TwitImg} className={styles.imgicons}/>
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={MailImg} className={styles.imgicons}/>
        </a>
      </span>
    )
  }
}

export class Home extends React.Component {
  constructor(){
    super();
  }
  register(){
    browserHistory.push('/timeline');
  }
  render(){
    return(
        <div className={styles.landinginfo}>
          <LandingPage />
              <button onClick={this.register} >register</button>
          <BottomBar />
        </div>
    );
  }
}
