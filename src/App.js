import React from 'react';
import logo from './logo.svg';
import './App.css';
import T from './components/T.js'
import Wrap from './components/Wrap.js'
import InnerComponent from './components/innerComponent.js'


const WrapedComponent = Wrap(InnerComponent);


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {/* <T /> */}
      <InnerComponent />
      <WrapedComponent title='高阶组件测试' />
    </div>
  );
}

export default App;
