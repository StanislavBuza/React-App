import React from 'react';


function Counter(props) {

    return (

        <div className="card mb-2">
            <div className="card-body">
                <div className={"row"}>
                    <div className="col">

                    ID {props.id}
                    </div>
                    <div className="col">
                    Counter Name {props.name}
                    </div>
                    <div className="col">
                    <button onClick={() => props.decrement(props.id)} className={"btn btn-primary"}>-</button>
                    {props.count}
                    <button onClick={() => props.increment(props.id)} className={"btn btn-success"}>+</button>
                    </div>
                    <div className="col">
                    <button onClick={() => props.remove(props.id)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Counter;
