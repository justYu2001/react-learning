import React, { Component } from 'react';

class MessageNotification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        }
    }

    handleMessageSubmit = (event) => {
        if(event.key === 'Enter') {
            const input = event.currentTarget;
            this.setState((previousState) => ({
                messages: [...previousState.messages, input.value],
            }));
            input.value = '';
        }
    }

    render() {
        const numberOfMessage = this.state.messages.length;

        return (
            <div>
                {
                    numberOfMessage> 0 &&
                    <h2>You have {numberOfMessage} unread messages.</h2>
                }
                <input type="text" id='message' onKeyDown={this.handleMessageSubmit}/>
            </div>
        );
    }
}

export default MessageNotification;