import React from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './Block'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Assignment Created by Muhammad Hammad.
          <a href="https://github.com/aiotcode/basic-react-app">
           Link to Repo 
          </a>
          <Block blockName="assignment" />
        </p>
      </header>
    </div>
  );
}

export default App;
