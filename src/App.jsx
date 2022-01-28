import React, { Component } from 'react';
import Greet from './Greet';
import Clock from './Clock';

class App extends Component {
    render() {
        return (
            <div>
                <Greet firstName='yu'/>
                <Greet firstName='jack'/>
                <Clock />
            </div>
        );
    }
}

export default App;