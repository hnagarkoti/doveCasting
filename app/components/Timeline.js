import React from 'react';
import timelineStyle from '../styles/timeline.css'
// require('../styles/timeline.css');
require('../js/timline.js');
export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <div className={timelineStyle.stepwizard}>
          <div className={timelineStyle['stepwizard-row setup-panel']}>
            <div className={timelineStyle['stepwizard-step']}>
              <a href="#step-1" type="button" className={timelineStyle['btn-primary btn-circle']}>1</a>
              <p>Step 1</p>
            </div>
            <div className={timelineStyle['stepwizard-step']}>
              <a href="#step-2" type="button" className={timelineStyle['btn-default btn-circle']}
              disabled="disabled">2</a>
              <p>Step 2</p>
            </div>
            <div className={timelineStyle['stepwizard-step']}>
              <a href="#step-3" type="button" className={timelineStyle['btn-default btn-circle']} 
              disabled="disabled">3</a>
              <p>Step 3</p>
            </div>
          </div>
        </div>
        <form role="form" action="" method="post">
        <div className="row setup-content" id="step-1">
        <h3> Step 1</h3>
        </div>
        <div className="row setup-content" id="step-2">
        <h3> Step 1</h3>
        </div>
        <div className="row setup-content" id="step-3">
        <h3> Step 1</h3>
        </div>
        </form>
      </div>
    )
  }
}
