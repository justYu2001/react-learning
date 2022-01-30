import React, { Component } from 'react';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            gender: 'male',
        };
    }
    

    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        alert(`name:${this.state.name}\ndescription:${this.state.description}\ngender:${this.state.gender}`);

        this.setState({
            name: '',
            description: '',
            gender: 'male',
        });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={this.state.name} onInput={this.handleInput} />
                </div>
                <div>
                    <label htmlFor="description"></label>
                    <textarea id="description" cols="30" rows="10" value={this.state.description} onInput={this.handleInput}></textarea>
                </div>
                <select id="gender" value={this.state.gender} onInput={this.handleInput}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <div>
                    <input type="submit" />
                </div>
            </form>
        );
    }
}

export default SignUpForm;