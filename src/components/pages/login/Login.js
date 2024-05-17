import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [formLoginData, setFormLoginData] = useState({
    name: '',
    password: '',
  });

  const { name, password } = formLoginData;
  const onChange = (e) =>
    setFormLoginData({ ...formLoginData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    // login (name,password)
  };
  // is client authenticated
  // redirect to upload page

  return (
    <div>
      <h1>Login</h1>
      <p>Log into your account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor='uname'>username:</label>
        <input
          name='uname'
          id='uname'
          type='text'
          placeholder='Enter your username'
          value={name}
          onChange={(e) => onChange(e)}
          required
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
        {/* <input type='submit' name='submit' id='submit' /> */}
      </form>
      <p>
        Don&apos;t have an account?<NavLink to='/signup'>Signup</NavLink>
      </p>
    </div>
  );
};

// export default Login;
export default connect(null, {})(Login);
