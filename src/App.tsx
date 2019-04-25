import React from 'react';
import './App.css';
import Login from './containers/LoginContainer';
import MainContentContainer from './containers/MainContentContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="AppWrapper">
        <Login></Login>
        <MainContentContainer></MainContentContainer>
      </div>
    </div>
  );
}

export default App;
