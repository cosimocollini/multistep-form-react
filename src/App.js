import './App.css';
import { useContext, useEffect } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import CarouselWrapper from './components/CarouselWrapper';
import FormContext from './context';
import JSConfetti from 'js-confetti';

function App() {
  const { step, name, email, phone } = useContext(FormContext);

  const mobileMedia = window.matchMedia("(max-width: 769px)")
  const isMobileDevice = mobileMedia.matches;

  useEffect(() => {
        if (step === 3) {
          const jsConfetti = new JSConfetti();
          jsConfetti.addConfetti();
        }
    }, [step]);

  return (
      <div className='wrapper'>
        <h1>Multistep form</h1>
        <h2>A multistep form with react</h2>
        {isMobileDevice & step !== 3 ? (
          <CarouselWrapper>
            <StepOne />
            <StepTwo />
            <StepThree />
          </CarouselWrapper>  
        ) : (
        <>
          {step === 0 && <StepOne />}
          {step === 1 && <StepTwo />}
          {step === 2 && <StepThree />}
        </>
      )}
      {step === 3 && (
        <div className='resume'>
          <h3>Your info</h3>
          <p>Name: <b>{name}</b></p>
          <p>Email: <b>{email}</b></p>
          <p>Phone: <b>{phone}</b></p>

        </div>
      )}
      </div>
  );
}

export default App;
