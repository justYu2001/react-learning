import React, { Component } from 'react';

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogged: false };
    }

    handleLoginClick = () => this.setState({ isLogged: true });

    handleLogoutClick = () => this.setState({ isLogged: false });

    LoginControlButton = () => {
        return (
            <div>
                {this.state.isLogged
                    ? <button onClick={this.handleLogoutClick}>Logout</button>
                    : <button onClick={this.handleLoginClick}>Login</button>
                }
            </div>
        );
    }

    GuestGreeting() {
        return <h1>Please sign up!</h1>
    }

    UserGreeting() {
        return <h1>Welcome back</h1>
    }

    render() {
        const isLogged = this.state.isLogged;

        return (
            <div>
                {isLogged
                    ? <this.UserGreeting />
                    : <this.GuestGreeting />
                }
                <this.LoginControlButton isLogged={isLogged} />
            </div>
        );
    }
}

export default LoginControl;