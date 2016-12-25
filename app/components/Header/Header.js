import React from 'react';
import {Link} from 'react-router';

import LogoImg from '../../img/header.png';
// require('react-html5video/dist/ReactHtml5Video.css');
// require('react-html5video/dist/ReactHtml5Video.js');

export const Header = (props) => {
  return(
    <div className={'top-header'}>
            <img src={LogoImg} />
    </div>
  );
};
