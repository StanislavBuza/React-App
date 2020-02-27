import React, {useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Counter from "./components/Counter";
import AddCounterForm from "./components/AddCounterForm";

const items = {
    headerMenu: [{
        text: 'Home',
        link: 'home-page'
    }, {
        text: 'Products',
        link: 'prod-page'
    }, {
        text: 'Services',
        link: 'services-page'
    }, {
        text: 'Prices',
        link: 'price-page'
    }, {
        text: 'Contacts',
        link: 'contact-page'
    }],
    footerMenu: [{
        text: 'About',
        link: 'about-page'
    }, {
        text: 'ContactUs',
        link: 'contact-page'
    }, {
        text: 'Location',
        link: 'location-page'
    }, {
        text: 'Legal',
        link: 'legal-page'
    }, {
        text: 'Address',
        link: 'address-page'
    }]

}


function App() {
    const initialCounters = [
        {id: 123, name: 'Counter1', count: 34},
        {id: 234, name: 'Counter2', count: 35},
        {id: 345, name: 'Counter3', count: 43},
    ]


    const buttonClicked = (name) => {
        console.log('Clicked!!' + name)
    };

    const [counters, setCounters] = useState(initialCounters)

    const resetTotalCount = () => {
        const newCounters = counters.map(el => ({...el, count: 0}));
        setCounters(newCounters);
    }

    const incrementCounter = (id) => {
        const index = counters.findIndex(el => el.id === id);
        const newCounters = [...counters];
        newCounters[index].count = newCounters[index].count + 1;
        setCounters(newCounters);
    }
    const decrementCounter = (id) => {
        const newCounters = counters.map(el => {
            if (el.id === id) return {...el, count: el.count - 1}
            return el;
        });
        setCounters(newCounters);
    }

    const removeCounter = (id) => {
        const newCounters = counters.filter(el => el.id !== id);
        setCounters(newCounters);
    }

    const addCounter = (name, count) => {
        const newCounters = [...counters, {
            id: Math.trunc(Math.random() * 1000),
            name,
            count
        }];
        setCounters(newCounters);
    }

    return (
        <div className="container">
            <Header menuItems={items.headerMenu}/>
            <Content bc={buttonClicked}/>
            <h1>Counters</h1>
            Total Count: {counters.reduce((acc, cur) => acc + cur.count, 0)}

            <button onClick={resetTotalCount} className="btn btn-danger">Reset All Counters</button>
            <hr/>

            {
                counters.map(el => <Counter key={el.id}
                                            name={el.name}
                                            id={el.id}
                                            count={el.count}
                                            increment={incrementCounter}
                                            decrement={decrementCounter}
                                            remove={removeCounter}

                />)
            }
            <hr/>
            <AddCounterForm onSubmit={addCounter}/>
            <hr/>
            <Footer menuItems={items}/>
        </div>
    );
}

// <Content bc={buttonClicked}/>
export default App;
