import React, { useState } from 'react';
import { ContactContext } from '../../context/contact/ContactContext';

export const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });
  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });
  return (
    <form>
      <h2 className='tex-primary'>Add Contact</h2>
      <input
        type='text'
        name='name'
        value={name}
        placeholder='Name'
        onChange={onChange}
      />
      <input
        type='text'
        name='email'
        value={email}
        placeholder='Email'
        onChange={onChange}
      />
      <input
        type='text'
        name='phone'
        value={phone}
        placeholder='Phone'
        onChange={onChange}
      />
      <h3>Contact Type</h3>
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
      />
      Professional{' '}
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
      />
      Personal{' '}
      <input
        type='submit'
        value='Add Contact'
        className='btn btn-primary btn-block'
      />
    </form>
  );
};
