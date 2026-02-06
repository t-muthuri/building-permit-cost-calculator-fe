import React, { useState } from 'react';
import { signup } from '../../../modules/actions/auth';
import { connect } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Signup = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formSignupData, setFormSignupData] = useState({
    name: '',
    password: '',
    re_password: '',
  });
  const { name, password, re_password } = formSignupData;
  const onChange = (e) =>
    setFormSignupData({ ...formSignupData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (password === re_password) {
      signup(name, password, re_password);
      setAccountCreated(true);
    }
  };

  if (isAuthenticated) {
    return <Navigate to='/upload' />;
  }

  if (accountCreated) {
    return <Navigate to='/login' />;
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor='name'>Name:</label>
        <input
          name='name'
          id='name'
          type='text'
          placeholder='Enter your name'
          autoComplete='off'
          onChange={(e) => onChange(e)}
          value={name}
          required
        />
        <br />
        <label htmlFor='password'>Password:</label>
        <input
          name='password'
          id='password'
          type='password'
          placeholder='Enter a password'
          onChange={(e) => onChange(e)}
          value={password}
          required
        />
        <br />
        <label htmlFor='repassword'>Confirm password:</label>
        <input
          name='re_password'
          id='re_password'
          type='password'
          placeholder='Confirm your password'
          onChange={(e) => onChange(e)}
          value={re_password}
          required
        />
        <br />
        <input type='submit' name='submit' id='submit' />
      </form>
      <p>Do it with passion or not at all</p>
      <div>
        <p>
          {' '}
          Already have an account?
          <NavLink to='/login'>Login</NavLink>
        </p>
      </div>
    </div>
  );
};

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
