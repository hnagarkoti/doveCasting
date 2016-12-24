// import React from 'react';
// import styles from './App.css';


import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import Thanks from "./components/Thanks";
import {Timeline} from "./components/Timeline";

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
        <Router history={browserHistory}>
          <Route path={"/"} component={Root}>
            <IndexRoute component={Home}/>
            <Route path={"casting"} component={Home}/>
            <Route path={"timeline"} component={Timeline}/>
            <Route path={"thanks"} component={Thanks}/>
          </Route>
        </Router>
    );
  }
}
