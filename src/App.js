import './App.css';
import React from 'react';
import Calculator from './components/pages/calculator/Calculator';
import Login from './components/pages/login/Login';
import Upload from './components/pages/upload/Upload';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/pages/signup/Signup';
// import Navbar from './components/molecules/navbar/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
import ProtectedRoute from './utils/ProtectedRoute';
import { SpeedInsights } from '@vercel/speed-insights/react';
import About from './components/pages/about/About';
import Home from './components/pages/home/Home';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/upload'
            element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <SpeedInsights />
    </Provider>
  );
}

export default App;
