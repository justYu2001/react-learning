import React, { useState, useEffect, useCallback } from 'react';

const Profile = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
    });

    const fetchRandomUser = useCallback(async () => {
        const randomUserID = Math.floor(Math.random() * 10 + 1);
        const userDataURL = `https://jsonplaceholder.typicode.com/users/${randomUserID}`;
        const response = await fetch(userDataURL);
        const userData = await response.json();
        setUser(userData);
    }, []);

    useEffect(fetchRandomUser, [fetchRandomUser]);

    return (
        <div>
           <p>name: {user.username}</p> 
           <p>email: {user.email}</p>
           <p>phone: {user.phone}</p>
           <button onClick={fetchRandomUser}>reload</button>
        </div>
    );
};

export default Profile;