import React from 'react';
import logo from './logo.svg'

function LogoFooter() {
  //JSX
  return (
    <div className='logoFooter'>
    <img src={logo} className="logo-footer" alt="logo"/>
    </div>
  );
}

export default LogoFooter;
