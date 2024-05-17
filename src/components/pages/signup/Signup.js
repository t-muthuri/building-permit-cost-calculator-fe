import React from 'react';

const Signup = () => {
  return (
    <div>
      <form>
        <label htmlFor='fname'>First name:</label>
        <input
          name='fname'
          id='fname'
          type='text'
          placeholder='Enter your first name'
        />
        <br />
        <label htmlFor='lname'>Last name:</label>
        <input
          name='lname'
          id='lname'
          type='text'
          placeholder='Enter your last name'
        />
        <br />
        <label htmlFor='email'>Email:</label>
        <input
          name='email'
          id='email'
          type='email'
          placeholder='Enter your email address'
        />
        <br />
        <label htmlFor='password'>Password:</label>
        <input
          name='password'
          id='password'
          type='password'
          placeholder='Enter a password'
        />
        <br />
        <label htmlFor='cpassword'>Confirm password:</label>
        <input
          name='cpassword'
          id='cpassword'
          type='password'
          placeholder='Confirm your password'
        />
        <br />
        <input type='submit' name='submit' id='submit' />
      </form>
      <p>Do it with passion or not at all</p>
    </div>
  );
};

export default Signup;
