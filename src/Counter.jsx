import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    increase = (event) => {
        console.log(event.currentTarget);
        this.setState((state) => ({
            counter: state.counter + 1,
        }));
    }

    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.increase}>+1</button>
            </div>
        );
    }
}

export default Counter;