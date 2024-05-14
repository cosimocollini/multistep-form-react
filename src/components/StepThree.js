import React, { useState, useContext } from 'react';
import Input from './Input';
import FormContext  from '../context';

const StepThree = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const { addPhone, addStep, step } = useContext(FormContext);

  const handleNext = () => {
    const validateName = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (phone.trim() !== '' && phone.trim().length === 10) {
            setError("");
            resolve();
          } else {
            reject('phone is not valid (length must be 10)');
          }
        }, 1000);
      });
    };

    validateName()
      .then(() => {
        addPhone(phone);
        addStep(step + 1);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handlePrev = () => {
    addStep(step - 1);
  }

  return (
    <div>
      <Input
        type="tel"
        name="phone"
        label="Phone"
        placeholder="e.g. 3333333333"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className='step-actions'>
        <button className='button button-secondary' onClick={handlePrev}>Prev</button>
        <button className='button button-primary' onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default StepThree;