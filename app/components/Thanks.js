import React from 'react';

export default class Thanks extends React.Component {
  render(){
    return(
        <div className="text-center landing-info">
          <h1>Dove Casting</h1>
          <p className="text-center">Thank you for submitting your
          application. You will receive an email from DoveCasting@dove.com
          confirming that we have received your details.</p>
          <img src="../app/img/thank-you.jpg" />
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
