import React, { Component } from 'react';
import Greet from './Greet';
import Clock from './Clock';
import Counter from './Counter';
import LoginControl from './LoginControl';
import MessageNotification from './MessageNotification';
class App extends Component {
    render() {
        return (
            <div>
                <Greet firstName='yu'/>
                <Greet firstName='jack'/>
                <Clock />
                <Counter />
                <LoginControl />
                <MessageNotification />
            </div>
        );
    }
}

export default App;