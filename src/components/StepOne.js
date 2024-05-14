import React, { useState, useContext } from 'react';
import Input from './Input';
import FormContext  from '../context';

const StepOne = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { addName, addStep, step } = useContext(FormContext);

  const handleNext = () => {
    const validateName = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (name.trim() !== '' && name.length > 2) {
            setError("")
            resolve();
          } else {
            reject('Insert a valid name');
          }
        }, 1000);
      });
    };

    validateName()
      .then(() => {
        addName(name);
        addStep(step + 1);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      <Input
        type="text"
        name="name"
        label="Name"
        placeholder="e.g. Mario"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className='step-actions next'><button className='button button-primary' onClick={handleNext}>Next</button></div>
    </div>
  );
};

export default StepOne;