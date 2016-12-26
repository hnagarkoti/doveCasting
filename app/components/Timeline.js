import React from 'react';
// import timelineStyle from '../styles/timeline.css'
require('../styles/timeline.css');
require('../js/timline.js');
export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
      <div className="stepwizard col-md-offset-3">
    <div className="stepwizard-row setup-panel">
      <div className="stepwizard-step">
        <a href="#step-1" type="button" className="btn btn-primary btn-circle">1</a>
        <p>Step 1</p>
      </div>
      <div className="stepwizard-step">
        <a href="#step-2" type="button" className="btn btn-default btn-circle" disabled="disabled">2</a>
        <p>Step 2</p>
      </div>
      <div className="stepwizard-step">
        <a href="#step-3" type="button" className="btn btn-default btn-circle" disabled="disabled">3</a>
        <p>Step 3</p>
      </div>
    </div>
  </div>

  <form role="form" action="" method="post">
    <div className="row setup-content" id="step-1">
      <div className="col-xs-6 col-md-offset-3">
        <div className="col-md-12">
          <h3> Step 1</h3>
          <div className="form-group">
            <label className="control-label">First Name</label>
            <input  maxlength="100" type="text" required="required" className="form-control" placeholder="Enter First Name"  />
          </div>
          <div className="form-group">
            <label className="control-label">Last Name</label>
            <input maxlength="100" type="text" required="required" className="form-control" placeholder="Enter Last Name" />
          </div>
          <div className="form-group">
            <label className="control-label">Address</label>
            <textarea required="required" className="form-control" placeholder="Enter your address" ></textarea>
          </div>
          <button className="btn btn-primary nextBtn btn-lg pull-right" type="button" >Next</button>
        </div>
      </div>
    </div>
    <div className="row setup-content" id="step-2">
      <div className="col-xs-6 col-md-offset-3">
        <div className="col-md-12">
          <h3> Step 2</h3>
          <div className="form-group">
            <label className="control-label">Company Name</label>
            <input maxlength="200" type="text" required="required" className="form-control" placeholder="Enter Company Name" />
          </div>
          <div className="form-group">
            <label className="control-label">Company Address</label>
            <input maxlength="200" type="text" required="required" className="form-control" placeholder="Enter Company Address"  />
          </div>
          <button className="btn btn-primary nextBtn btn-lg pull-right" type="button" >Next</button>
        </div>
      </div>
    </div>
    <div className="row setup-content" id="step-3">
      <div className="col-xs-6 col-md-offset-3">
        <div className="col-md-12">
          <h3> Step 3</h3>
          <button className="btn btn-success btn-lg pull-right" type="submit">Submit</button>
        </div>
      </div>
    </div>
  </form>
      </div>
    )
  }
}
