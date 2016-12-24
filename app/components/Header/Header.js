import React from 'react';
import {Link} from 'react-router';

import LogoImg from '../../img/header.png';


export const Header = (props) => {
  return(
    <div className={'top-header'}>
            <img src={LogoImg} />
    </div>
  );
};
