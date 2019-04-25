import React from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './components/Article';
import Login from './containers/LoginContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Login></Login>
      <Article></Article>
    </div>
  );
}

export default App;
