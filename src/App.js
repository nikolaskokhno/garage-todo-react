import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Copyright from './components/Copyright/Copyright';

const App = () => {
  
  return (
    <div className="container">
      <Header />

      <Copyright />
    </div>
  );
}

export default App;
