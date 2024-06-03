import React, { useEffect } from 'react';
import Navbar from '../components/molecules/navbar/Navbar';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../modules/actions/auth';
// logic:
// when a client refreshes the app they remain logged in
// function checks if the client is authorized

const Layout = (props) => {
  useEffect(() => {
    props.checkAuthenticated();
    props.load_user();
  }, []);
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
