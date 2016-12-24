import React from 'react';
import styles from '../styles/App.css';
import ThankYou from '../img/ThankYou.jpg';
import LogoImg from '../img/thanks1.png';

export default class Thanks extends React.Component {
  render(){
    return(
        <div className={styles['text-center'] + " " + styles['landing-info']}>
          <h1>Dove Casting</h1>
          <p className={styles['text-center']}>Thank you for submitting your
          application. You will receive an email from DoveCasting@dove.com
          confirming that we have received your details.</p>
          <img src={ThankYou} />
          <p className="soical-icons">
            <span>share</span>
            <a href="https://www.facebook.com/" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#!" target="_blank">
              <i className="fa fa-envelope-o"></i>
            </a>
          </p>
      </div>
    );
  }
}
