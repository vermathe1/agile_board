import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Addtodo from './components/addtodo';
import ShowTodo from './components/showtodo';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Addtodo/>
        <ShowTodo/>
      </div>
    );
  }
}
export default App;