import React from 'react';
import Navbar from '../components/molecules/navbar/Navbar';

// logic:
// when a client refreshes the app they remain logged in
// function checks if the client is authorized

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
