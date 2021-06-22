import { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';


const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasksArray = ['Estudar', 'trabalhar', 'lala', 'teste'];

function listTasks () {
  return tasksArray.map(element => task(element));
}

const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here{/* 's a subtitle */}</p>
  </div>
);

function App() {
  return (
    <ul>
      { JSX }
      <MyComponent />
    </ul>
  );
}

export default App;
