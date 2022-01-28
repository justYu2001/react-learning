import React, { Component } from 'react';
import Greet from './Greet';
import Clock from './Clock';
import Counter from './Counter';

class App extends Component {
    render() {
        return (
            <div>
                <Greet firstName='yu'/>
                <Greet firstName='jack'/>
                <Clock />
                <Counter />
            </div>
        );
    }
}

export default App;