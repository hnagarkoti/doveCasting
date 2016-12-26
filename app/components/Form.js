import React from 'react';

import styles from '../styles/App.css';
import InfoImg from '../img/infoicon.png';
export default class Form extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className={styles.formOne}>
                    <div className={styles.formGroup}>
                        <label for="firstName" className={styles.formLabel}>First name <b>*</b> <img src={InfoImg} /></label>
                        <input type="text" className={styles.formControl} id="firstName" />
                    </div>
                    <div className={styles.formGroup}>
                        <label for="lasttName" className={styles.formLabel}>Last name <b>*</b></label>
                        <input type="text" className={styles.formControl} id="lastName" />
                    </div>
                    <div className={styles.formGroup}>
                        <label for="gender" className={styles.formLabel}>Gender <b>*</b></label>
                        <div className={styles.formCheck}>
                            <span><input type="radio" name="optradio" /><label>Option 1</label>
                            </span>
                            <span>
                                <label><input type="radio" name="optradio" /><label>Option 1</label></label>
                            </span>
                            <span>
                                <label><input type="radio" name="optradio" /><label>Option 1</label></label>
                            </span>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label for="birthday" className={styles.formLabel}>Birthday <b>*</b></label>
                        <div className={styles.formFull}>
                            <select className={styles.formSelect} id="phoneNumber">
                                <option>Day</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <select className={styles.formSelect} id="phoneNumber">
                                <option>Month</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <select className={styles.formSelect} id="phoneNumber">
                                <option>Year</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label for="location" className={styles.formLabel}>Location <b>*</b></label>
                        <select className={styles.formControl} id="location">
                            <option>Select country</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label for="nationality" className={styles.formLabel}>Nationality <b>*</b></label>
                        <select className={styles.formControl} id="nationality">
                            <option>Select country</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label for="occupation" className={styles.formLabel}>Occupation <b>*</b></label>
                        <input type="text" className={styles.formControl} id="lastName" />
                    </div>
                    <div className={styles.formGroup}>
                        <label for="email" className={styles.formLabel}>Email <b>*</b></label>
                        <input type="text" className={styles.formControl} id="email" 
                        placeholder="Enter email address" />
                    </div>
                    <div className={styles.formGroup}>
                        <label for="phoneNumber" className={styles.formLabel}>Phone number <b>*</b></label>
                        <div className={styles.formFull}>
                        <select className={styles.formSelect} id="phoneNumber">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <input type="tel" className={styles.formInput} id="number"  
                        placeholder="Enter phone number"/>
                        </div>
                    </div>
                    <button onClick={this.register} >register</button>
                </div>
            </div>
        )
    }
} 