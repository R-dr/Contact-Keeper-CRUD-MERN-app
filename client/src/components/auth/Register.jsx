import React, { useState, useContext, useEffect } from 'react';
import { AlertContext } from '../../context/alert/alertContext';
import { AuthContext } from '../../context/auth/authContext';

export const Register = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { register, error, clearErrors } = authContext;
  useEffect(() => {
    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
  }, [error]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const { name, email, password, passwordConfirmation } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    //  alert handling
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== passwordConfirmation) {
      setAlert(
        "passwords don't match, please enter the same password",
        'danger'
      );
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='passwordConfirmation'>Confirm Password</label>
          <input
            type='password'
            name='passwordConfirmation'
            value={passwordConfirmation}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};
