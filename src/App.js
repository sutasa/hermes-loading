import React from 'react';
import logo from './logo.svg';
import './App.css';
import BeatLoader from './Component/BeatLoader';
import ClipLoader from './Component/ClipLoader';
import PulseLoader from './Component/PulseLoader';
import BeatLoader2 from './Component/BeatLoader2';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div>
                BeatLoader
                <BeatLoader
                    loading = {true}
                    size = {15}
                    color = "#b064d1"
                    margin = {4}
                />
            </div>
            <div>
                ClipLoader
                <ClipLoader
                    loading = {true}
                    size = {20}
                    color = "#b064d1"
                />
            </div>
            <div>
                PulseLoader
                <PulseLoader
                    loading = {true}
                />
            </div>
            <div>
                BeatLoader2
                <BeatLoader2
                    loading = {true}
                />
            </div>
            
        </header>
    </div>
  );
}

export default App;
