import React, { useEffect } from 'react';
import Navbar from '../components/molecules/navbar/Navbar';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../modules/actions/auth';
import PropTypes from 'prop-types';
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  checkAuthenticated: PropTypes.func.isRequired,
  load_user: PropTypes.func.isRequired,
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
