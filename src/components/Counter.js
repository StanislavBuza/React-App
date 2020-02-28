import React from 'react';


function Counter(props) {

    const {counter, decrement, increment, remove } = props;

    return (

        <div className="card mb-2">
            <div className="card-body">
                <div className={"row"}>
                    <div className="col">

                    ID {counter.id}
                    </div>
                    <div className="col">
                    Counter Name {counter.name}
                    </div>
                    <div className="col">
                    <button onClick={() => decrement(counter.id)} className={"btn btn-primary"}>-</button>
                    {counter.count}
                    <button onClick={() => increment(counter.id)} className={"btn btn-success"}>+</button>
                    </div>
                    <div className="col">
                    <button onClick={() => remove(counter)}
                            className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Counter;
