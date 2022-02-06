import React, { useEffect } from 'react';

const MessageListItem = (props) => {
    const { message, onMessageDelete } = props;

    useEffect(() => {
        return () => console.log(`${message} is deleted`);
    });

    return (
        <li>
            {message}
            <button style={ { margin: 10, } } onClick={onMessageDelete(message)}>delete</button>
        </li>
    );
};

export default MessageListItem;