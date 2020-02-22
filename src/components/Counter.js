import React, { useState } from 'react';


function Counter(props) {

    return (

        <div className="container">
            ID {props.id}
            Counter name {props.name}
            Counter Value {props.count}
         <button onClick={props.decrement}>-</button>
         <button onClick={props.increment}>+</button>
        </div>

    );
}

export default Counter;
