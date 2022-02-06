import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);

    useEffect(() => {
        document.title = `You clicked ${count} times.`

        return () => console.log('unmount');
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={increase}>Click me</button>
        </div>
    );
};

export default Counter;