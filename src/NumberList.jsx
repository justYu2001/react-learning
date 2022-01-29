import React, { Component } from 'react';

class NumberList extends Component {
    render() {
        const listItems = this.props.numbers.map((number) => {
            return <li key={number}>{number}</li>;
        });

        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        );
    }
}

export default NumberList;