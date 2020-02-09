import React from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import Header from './components/Header/Header';
import Copyright from './components/Copyright/Copyright';
import ButtonAdd from './components/ButtonAdd/ButtonAdd';
import ProjectList from './components/Project/ProjectList';

const App = () => {
  
  return (
    <div className="container">
      <Header />
      <ProjectList />
      <ButtonAdd />
      <Copyright />
    </div>
  );
}

export default App;
