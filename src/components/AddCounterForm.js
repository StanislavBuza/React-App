import React, {useState} from 'react';


function AddCounterForm(props) {

    const [name, setName] = useState('---')
    const [count, setCount] = useState('456')

    const onSubmit = () => {
        props.onSubmit(name, Number(count));
        setName('')
        setCount('')
    }

    return (

        <div className="row">
            <div className="col">
                <input type="text" name="name" className="form-control" value={name}
                       onChange={e => setName(e.target.value)}/>
            </div>
            <div className="col">
                <input type="text" name="count" className="form-control" value={count}
                       onChange={e => setCount(e.target.value)}/>
            </div>
            <div className="col">
                <button className={"btn btn-success"} onClick={() => onSubmit(name, count)}>Create</button>
            </div>

        </div>

    );
}

export default AddCounterForm;
