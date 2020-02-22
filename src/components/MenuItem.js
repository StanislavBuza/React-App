import React from 'react';

function MenuItem(props) {
  console.log(props);

  //JSX
  return (
    <li>
    <a href={props.menuItems.link}>{props.menuItems.text}</a>
    </li>
  );
}

export default MenuItem;
