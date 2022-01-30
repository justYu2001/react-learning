import React, { Component } from 'react';
import Greet from './Greet';
import Clock from './Clock';
import Counter from './Counter';
import LoginControl from './LoginControl';
import MessageNotification from './MessageNotification';
import NumberList from './NumberList';
import SignUpForm from './SignUpForm';
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
                <NumberList numbers={[1, 2, 3, 4 ,5]} />
                <SignUpForm />
            </div>
        );
    }
}

export default App;