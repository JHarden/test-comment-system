import React from 'react';
import './App.css';
import Login from './containers/LoginContainer';
import MainContentContainer from './containers/MainContentContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Login></Login>
      <MainContentContainer></MainContentContainer>
    </div>
  );
}

export default App;
