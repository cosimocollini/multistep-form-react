import React from 'react';
import "./Input.css"

const Input = ({ type, name, label, placeholder, value, onChange }) => {
  return (
    <div className='input-wrapper'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;