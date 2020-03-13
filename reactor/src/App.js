import React from 'react';
import Hi from './greet';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hi firstname="John" lastname="Doe" />
      </header>
    </div>
  );
}

export default App;
