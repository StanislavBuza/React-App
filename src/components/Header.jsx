import React from 'react';
import Logo from "../Logo";
import Menu from "./Menu";

function Header(props) {




    //JSX
    return (
        <header>
            <div className="container">

                <Logo className='logo-header'/>
                <Menu menuItems={props.menuItems}/>
            </div>

        </header>
    );
}

export default Header;
