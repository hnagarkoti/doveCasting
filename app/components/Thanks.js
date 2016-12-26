import React from 'react';
import styles from '../styles/App.css';

import ThankuImg from '../img/thankyou.jpg';
import FaceImg from '../img/facebook.png';
import TwitImg from '../img/twitter.png';
import MailImg from '../img/gmail.png';

export default class Thanks extends React.Component {
  render(){
    return(
        <div className={styles.landinginfo}>
          <h1>Dove Casting</h1>
          <p className={styles.centerText}>Thank you for submitting your
          application. You will receive an email from DoveCasting@dove.com
          confirming that we have received your details.</p>
          <img className={styles.thankuimg} src={ThankuImg} />
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
      </div>
    );
  }
}
