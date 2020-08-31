import React, { useState, useEffect } from 'react';
import './effects.css';
import { Message } from './Message';

export const FormWithCustomHook = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formState;

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <>
      <h1>Form With Custom Hook</h1>
      <br />

      <div className='form-group col-6'>
        <input
          type='text'
          className='form-control'
          name='name'
          placeholder='Tu Nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className='form-group col-6'>
        <input
          type='text'
          className='form-control'
          name='email'
          placeholder='email@gmail.com'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className='form-group col-6'>
        <input
          type='password'
          className='form-control'
          name='password'
          value={password}
          onChange={handleInputChange}
        ></input>
      </div>
    </>
  );
};
