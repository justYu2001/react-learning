import React, { Component } from 'react';

function FormattedData(props) {
    return <h2>現在是{props.date.toLocaleTimeString()}</h2>;
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date(),
        };
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    componentDidMount() {
        this.timeID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    render() {
        return (
            <FormattedData date={this.state.date} />
        );
    }
}

export default Clock;