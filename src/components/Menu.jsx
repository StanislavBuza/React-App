import React from 'react';
import MenuItem from "./MenuItem";


function Menu(props) {



    //JSX
    return (
        <nav>
            <ul>
                {props.menuItems.map(el => <MenuItem key={el.text} menuItems={el} />)}
            </ul>
        </nav>
    );
}

export default Menu;
