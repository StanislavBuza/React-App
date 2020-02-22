import React, {useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Counter from "./components/Counter";

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
        {id:123, name: 'Counter1', count:34},
        {id:234, name: 'Counter2', count:35},
        {id:345, name: 'Counter3', count:43},
    ]


    const buttonClicked = (name) => {
        console.log('Clicked!!' + name)
    };

    const [counters, setCounters] = useState(initialCounters)

    const resetTotalCount = () => {
        const newCounts = counters.map(el => ({...el, count: 0}));
        setCounters(newCounts);
    }

    const increment = (id) => {

    }
    const decrement = (id) => {

    }

    return (
        <div className="App">
            <Header menuItems={items.headerMenu}/>
            <Content bc={buttonClicked}/>
            Total Count: {counters.reduce((acc, cur) => acc + cur.count, 0)}
            <button onClick={resetTotalCount}>Reset All Counters</button>
            <hr/>
            Counters
            {
                counters.map(el => <Counter key={el.id}
                                            name={el.name}
                                            count={el.count}
                                            increment={increment}
                                            decrement={decrement}
                />)
            }
           <hr/>
            <Footer menuItems={items}/>
        </div>
    );
}

// <Content bc={buttonClicked}/>
export default App;
