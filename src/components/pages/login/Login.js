import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import { login } from '../../../modules/actions/auth';
import PropTypes from 'prop-types';

const Login = ({ login, isAuthenticated }) => {
  const [formLoginData, setFormLoginData] = useState({
    name: '',
    password: '',
  });

  const { name, password } = formLoginData;
  const onChange = (e) =>
    setFormLoginData({ ...formLoginData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    login(name, password);
  };

  if (isAuthenticated) {
    return <Navigate to='/upload' />;
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Log into your account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor='name'>username:</label>
        <input
          name='name'
          id='name'
          type='text'
          placeholder='Enter your username'
          value={name}
          onChange={(e) => onChange(e)}
          required
          autoComplete='off'
        />
        <br />
        <label htmlFor='password'>Password:</label>
        <input
          name='password'
          id='password'
          type='password'
          placeholder='Enter a password'
          value={password}
          onChange={(e) => onChange(e)}
          minLength='6'
          required
        />
        <br />
        <button type='submit'>Login</button>
      </form>
      <p>
        Don&apos;t have an account?<NavLink to='/signup'>Signup</NavLink>
      </p>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
