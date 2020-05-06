import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className= "top">Tell us about you</h1>
          <div className="row">
            <input type="text" placeholder="Search"/>
          </div>
          <div className="row half">
            <input type="password" placeholder="Search"/>
            <input type="text" placeholder="Search" />
          </div>
          <div className="row">
            <input type="text" placeholder="Search"/>
          </div>
      </div>
    </div>
  );
}

export default App;
