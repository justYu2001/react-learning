import React, { Component } from 'react';
import Greet from './Greet';

class App extends Component {
    render() {
        return (
            <div>
                <Greet firstName='yu'/>
                <Greet firstName='jack'/>
            </div>
        );
    }
}

export default App;