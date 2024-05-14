import React, { useEffect, useMemo, useContext } from 'react';
import Glide from '@glidejs/glide';
import "@glidejs/glide/dist/css/glide.core.css"
import FormContext  from '../context';

const CarouselWrapper = ({ children }) => {
    const { step } = useContext(FormContext);
  const slider = useMemo(
    () => new Glide(".glide", {
      type: 'slider',
      perView: 1,
      dragThreshold: false,
    }), []);

const str = `=${step}`;
  
  useEffect(() => {
      slider.mount();
      return () => {
          slider.disable();
      }
    }, [slider]);

  useEffect(() => {
        slider.go(str);
    }, [step, str, slider]);

  return (
    <div className="glide">
        <div className="glide__bullets" data-glide-el="controls[nav]">
            <button className="glide__bullet" data-glide-dir="=0">1</button>
            <button className="glide__bullet" data-glide-dir="=1">2</button>
            <button className="glide__bullet" data-glide-dir="=2">3</button>
        </div>

      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {React.Children.map(children, (child, index) => (
            <li className="glide__slide" key={index}>
              {child}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ); 
};

export default CarouselWrapper;