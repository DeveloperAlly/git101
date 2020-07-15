import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Git101
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UC37m20SGisKW1HG-baE62Qg?view_as=subscriber"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Git with GChan and Ally
        </a>
      </header>
    </div>
  );
}

export default App;
