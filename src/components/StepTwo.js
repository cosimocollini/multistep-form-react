import React, { useState, useContext } from 'react';
import Input from './Input';
import FormContext  from '../context';

const StepTwo = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { addEmail, addStep, step } = useContext(FormContext);

  const emailIsValid = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

  const handleNext = () => {
    const validateEmail = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email.trim() === '') {
            reject('Insert valid email');
          } else if (!emailIsValid(email.trim())) { 
            reject('Insert valid email');
          } else {
            setError("");
            resolve();
          }
        }, 1000);
      });
    };

    validateEmail()
      .then(() => {
        addEmail(email);
        addStep(step + 1);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handlePrev = () => {
    addStep(step - 1)
  }

  return (
    <div>
      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="e.g. mario@rossi.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className='step-actions'>
        <button className='button button-secondary' onClick={handlePrev}>Prev</button>
        <button className='button button-primary' onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default StepTwo;