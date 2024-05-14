import React, { createContext, useState } from 'react';

const FromContext = createContext({
  name: "",
  email: "",
  phone: "",
  step: 0,
});

export const FormProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(0);

  const addName = (name) => {
    setName(name);
  };
  const addEmail = (email) => {
    setEmail(email);
  };
  const addPhone = (phone) => {
    setPhone(phone);
  };
  const addStep = (step) => {
    setStep(step);
  };

  return (
    <FromContext.Provider
      value={{ name, email, phone, step, addName, addEmail, addPhone, addStep }}
    >
      {children}
    </FromContext.Provider>
  );
};

export default FromContext;