import React from 'react';

const Signup = () => {
  return (
    <div>
      <h1>Hello,</h1>
      <form>
        <label htmlFor='email'>Email:</label>
        <input name='email' id='email' type='email' />
        <br />
        <label htmlFor='password'>Password:</label>
        <input name='password' id='password' type='password' />
        <br />
        <input name='submit' type='submit' id='submit' />
      </form>
    </div>
  );
};

export default Signup;
