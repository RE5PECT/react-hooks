import React, { useState, useEffect } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '' });
  const { name, email } = formState;

  useEffect(() => {
    // console.log('Hey!');
  }, []);

  useEffect(() => {
    // console.log('Cambio Form!');
  }, [formState]);

  useEffect(() => {
    // console.log('Cambio Form!');
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <>
      <h1>Use Effect</h1>
      <br />
      <div className='form-group'>
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
      <div className='form-group'>
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
      {name === '123' && <Message />}
    </>
  );
};
