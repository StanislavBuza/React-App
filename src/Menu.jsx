import React from 'react';
import MenuItem from "./MenuItem";

function Menu() {
    //JSX
    return (
        <nav>
            <ul>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </ul>
        </nav>
    );
}

export default Menu;
