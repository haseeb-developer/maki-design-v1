import React from 'react';
import './TechSlider.css';

const TechSlider = () => {
  return (
    <div className="techslider">
      <div className="slider__logos">
        <div className="logo__items">
          <div className="logo__slider">Python</div>
          <div className="logo__slider">Ruby</div>
          <div className="logo__slider">React</div>
          <div className="logo__slider">Flask</div>
          <div className="logo__slider">Ralls</div>
          <div className="logo__slider">NodeJS</div>
        </div>
        <div className="logo__items">
          <div className="logo__slider">Python</div>
          <div className="logo__slider">Ruby</div>
          <div className="logo__slider">React</div>
          <div className="logo__slider">Flask</div>
          <div className="logo__slider">Ralls</div>
          <div className="logo__slider">NodeJS</div>
        </div>
      </div>

      <div className="slider__logos responsiveSlider">
        <div className="logo__items">
          <div className="logo__slider">Flask</div>
          <div className="logo__slider">Ralls</div>
          <div className="logo__slider">Python</div>
          <div className="logo__slider">React</div>
          <div className="logo__slider">Ruby</div>
          <div className="logo__slider">NodeJS</div>
        </div>
        <div className="logo__items">
          <div className="logo__slider">Flask</div>
          <div className="logo__slider">Ralls</div>
          <div className="logo__slider">Python</div>
          <div className="logo__slider">React</div>
          <div className="logo__slider">Ruby</div>
          <div className="logo__slider">NodeJS</div>
        </div>
      </div>
    </div>
  );
};

export default TechSlider;
