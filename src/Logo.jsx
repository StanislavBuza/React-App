import React from 'react';
import logo from './logo.svg'

function Logo() {
  //JSX
  return (
    <div className='logo'>
    <img src={logo} className="logo" alt="logo"/>
    </div>
  );
}

export default Logo;
