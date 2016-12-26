import React from 'react';
import timelineStyle from '../styles/timeline.css';
import Form1 from './Form1';
// require('../styles/timeline.css');
// require('../js/timline.js');
export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      tab1: true,
      tab2: false,
      tab3: false
    }
  }
  handleTabChange(node,event){
    console.log('node',node);
    if(node=='tab1'){
      this.setState({
        tab1: true,
        tab2: false,
        tab3: false
      })
    } else if (node == 'tab2') {
      this.setState({
        tab1: false,
        tab2: true,
        tab3: false
      })
    } else if (node == 'tab3') {
      this.setState({
        tab1: false,
        tab2: false,
        tab3: true
      })
    }

  }
  render(){
    return(
      <div>
        <div className={timelineStyle.stepwizard}>
          <div className={timelineStyle['stepwizard-row setup-panel']}>
            <div className={timelineStyle['stepwizard-step']}>
              <a onClick={this.handleTabChange.bind(this, 'tab1')} type="button" className={timelineStyle['btn-primary btn-circle']}>1</a>
              <p>Step 1</p>
            </div>
            <div className={timelineStyle['stepwizard-step']}>
              <a onClick={this.handleTabChange.bind(this, 'tab2')} type="button" className={timelineStyle['btn-default btn-circle']}
              disabled="disabled">2</a>
              <p>Step 2</p>
            </div>
            <div className={timelineStyle['stepwizard-step']}>
              <a onClick={this.handleTabChange.bind(this, 'tab3')} type="button" className={timelineStyle['btn-default btn-circle']}
              disabled="disabled">3</a>
              <p>Step 3</p>
            </div>
          </div>
        </div>
        <form role="form" action="" method="post">
          <div className="row setup-content" id="step-1">
            {this.state.tab1 == true ? <Form1/>: null}
            {this.state.tab2 == true ? '<Form2/>': null}
            {this.state.tab3 == true ? '<Form3/>': null}
          </div>

        </form>
      </div>
    )
  }
}
