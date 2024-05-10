import './App.css';
import React from 'react';
import Calculator from './components/pages/calculator/Calculator';
import Login from './components/pages/login/Login';
import News from './components/pages/news/News';
import Signin from './components/pages/signin/Signin';
import Upload from './components/pages/upload/Upload';

function App() {
  return (
    <div className='App'>
      <Calculator />
      <Login />
      <News />
      <Signin />
      <Upload />
    </div>
  );
}

export default App;
