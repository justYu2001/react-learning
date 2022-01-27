import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const user1 = {
  firstName: 'yu',
  lastName: 'chen',
  age: 20,
};

const user2 = {
  firstName: 'jack',
  lastName: 'chen',
  age: 18,
};

const formatName = (user) => `${user.firstName} ${user.lastName}`;

function isAdult(user) {
  if(user.age >= 20) {
    return <h2>You are an adult</h2>;
  } else {
    return <h2>You are a minor</h2>;
  }
}

const element = (
  <h1>
    Hello, {formatName(user2)}
  </h1>
);

ReactDOM.render(
  <div>
    {element}
    {isAdult(user2)}
    <div tabIndex='0' className="block"></div>
  </div>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
