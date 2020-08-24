/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/


import React, { Component } from "react";
import '../src/components/css/style.css'
import Header from '../src/components/Header'
import Searcher from './Searcher';


class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
       
        <div style={{"margin-top":"200px" , "text-align":"center"}}>
           <Searcher/>
        </div>
      </div>
    );
  }
}

export default App;
