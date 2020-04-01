import React from 'react';
import logo from './logo.svg';
import './App.css';
import BeatLoader from './Component/BeatLoader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <BeatLoader
          loading = {true}
          size = {15}
          color = "#b064d1"
          margin = "2"
        />
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
