import React from 'react';
// This is style sheet link where we are importing css as a variable styles. If you want to access any class of that css file you have to write like below i have done styles.container
import styles from '../styles/App.css';
import { Header } from './Header/Header';

export class Root extends React.Component {
  render(){
    return(
      <div className={styles.container}>
        <div>
          <Header/>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
