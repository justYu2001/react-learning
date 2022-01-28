import React, { Component } from 'react';

class Greet extends Component {
    render() {
        return (
            <h1>hi, {this.props.firstName}</h1>
        );
    }
}

export default Greet;