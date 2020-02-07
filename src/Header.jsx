import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
    //JSX
    return (
        <header>
            <div className="container">

                <Logo className='logo-header'/>
                <Menu/>
            </div>

        </header>
    );
}

export default Header;
