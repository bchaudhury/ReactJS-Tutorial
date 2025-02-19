/* import logo from './logo.svg';
import './App.css'; */
import React from 'react';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';

function App() {
  return (
  /*  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My Website !!</h1>
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
    <div className='container'>
      <div class = 'card shadow'>
        <div class = 'card-body'>
          <button className='btn btn-primary'>Click</button>
        </div>
      </div>
    </div> 
  */
    <div>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
