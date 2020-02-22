import React from 'react';
import Logo from "../Logo";
import Menu from "./Menu";

function Footer(props) {
    //JSX
    return (
        <footer>

            <div className="container">
                <div className="footer-menus">
                    <Logo className='logo-header'/>
                </div>
                <div className="footer-menus">
                    <Menu menuItems={props.menuItems.headerMenu}/>
                </div>
                <div className="footer-menus">
                    <Menu menuItems={props.menuItems.footerMenu}/>
                </div>
                <div className="footer-menus">

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries

                </div>
            </div>

        </footer>
    );
}

export default Footer;
