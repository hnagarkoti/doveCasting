import React from 'react';
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');

export default class FormComponent extends React.Component {
    constructor(props){
      super(props);
    }
    render(){
        return(
            <form role="form" action="" method="post">
                {this.props.show == 'form1' ? <Form1 /> : null}
                {this.props.show == 'form2' ? <Form2 /> : null}
                {this.props.show == 'form3' ? <Form3 /> : null}
            </form>
        )
    }
}

class Form1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gender: 'Male',
      startDate: moment(),
      location: 'Delhi'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.locationChange = this.locationChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      gender: event.target.value
    });
  }
  handleDateChange(date){
    this.setState({
      startDate: date
    })
  }
  locationChange(event){
    this.setState({
      location: event.target.value
    })
  }
  validateEmail(value) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }
  handleEmailInput(){

  }

  render(){
    var myStyle = {
        fontSize: 20,
         color: '#FF0000'
      }
    return(

      <div className="setup-content" id="step-1">
        <div className="form-group">
          <label for="firstname" className="text-left full-width">First name <b style = {myStyle}>*</b></label>
          <input type="text" className="form-control" id="firstname"/>
        </div>
        <div className="form-group">
          <label for="lastname" className="text-left full-width">Last name <b style = {myStyle}>*</b></label>
          <input type="text" className="form-control" id="lastname"/>
        </div>
        <div className="form-group">
          <label for="gender" className="text-left full-width">Gender:</label>
          <div className="form-group">
            <label className="form-check-inline">
              <input className="form-check-input" type="radio"
              name="inlineRadioOptions" id="inlineRadio1" value="option1" />Female
            </label>
            <label className="form-check-inline">
              <input className="form-check-input" type="radio"
              name="inlineRadioOptions" id="inlineRadio2" value="option2" />Male
            </label>
            <label className="form-check-inline">
              <input className="form-check-input" type="radio"
              name="inlineRadioOptions" id="inlineRadio3" value="option3" />Prefer not to say
            </label>
            </div>
          {/*<select value={this.state.value} onChange={this.handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>*/}
        </div>
        <div className="form-group">
          <label for="location">Location <b style = {myStyle}>*</b></label>
          <select className="form-control" id="location">
            <option>Select country</option>
            <option>Select country</option>
            <option>Select country</option>
            <option>Select country</option>
            <option>Select country</option>
          </select>
        </div>
        <div className="form-group">
          <label for="location">Nationality
            <b style = {myStyle}>*</b>
            <i className="fa fa-info"></i>
          </label>
          <select className="form-control" id="location">
            <option>Select country</option>
            <option>Select country</option>
            <option>Select country</option>
            <option>Select country</option>
            <option>Select country</option>
          </select>
        </div>
        <div className="form-group">
          <label for="occupation" className="text-left full-width">Occupation
            <b style = {myStyle}>*</b>
            <i className="fa fa-info"></i>
          </label>
          <input type="text" className="form-control" id="occupation"/>
        </div>
        <div className="form-group">
          <label for="email" className="text-left full-width">Email
            <b style = {myStyle}>*</b>
            <i className="fa fa-info"></i>
          </label>
          <input type="text" className="form-control" id="email"/>
        </div>
        <div className="form-group">
          <label for="phone" className="text-left full-width">Phone number
            <b style = {myStyle}>*</b>
            <i className="fa fa-info"></i>
          </label>
          <input type="tel" className="form-control" id="email"/>
        </div>
        <div className="form-group">
        {/*<label>
          Birthday:
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleDateChange} />
        </label>
        <br/><br/><br/>
        <label>
          Location:
          <select value={this.state.location} onChange={this.locationChange}>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </label>
        <label>
          Nationality:
          <select value={this.state.location} onChange={this.locationChange}>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </label>*/}
        <button className="nextBtn"
        type="button" >continue</button>
        </div>
      </div>
    )
  }
}
class Form2 extends React.Component {
  render(){
    return(
      <div className="row setup-content" id="step-2">
          <div className="col-xs-6 col-md-offset-3">
              <div className="col-md-12">
              <h3> Step 2</h3>

              <button className="btn btn-primary nextBtn pull-right"
              type="button" >Next</button>
              </div>
          </div>
      </div>
    )
  }
}

class Form3 extends React.Component {
  render(){
    return(
      <div className="row setup-content" id="step-3">
          <div className="col-xs-6 col-md-offset-3">
              <div className="col-md-12">
              <h3> Step 3</h3>
              <button className="btn btn-success pull-right"
              type="submit">Submit</button>
              </div>
          </div>
      </div>
    )
  }
}
