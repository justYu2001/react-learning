import React, { useState } from 'react';
import MessageListItem from './MessageListItem';

const MessageList = () => {
    const [messageList, setMessageList] = useState([]);

    const addMessage = (event) => {
        if(event.key === 'Enter') {
            const { target } = event;
            setMessageList([...messageList, target.value]);
            target.value = '';
        }
    }

    const deleteMessage = (messageBeDeleted) => {
        return () => {
            const newMessageList = messageList.filter((message) => message !== messageBeDeleted);
            setMessageList(newMessageList);
        };
    }

    const MessageItems = () => {
        return messageList.map((message, index) => {
            return <MessageListItem 
                        key={`${message}${index}`} 
                        message={message} 
                        onMessageDelete={deleteMessage}/>
        })
    }

    return (
        <div>
            <input type="text" onKeyDown={addMessage} />
            <ul>
                <MessageItems />
            </ul>
        </div>
    );
};

export default MessageList;