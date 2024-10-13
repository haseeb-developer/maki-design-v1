import React from 'react';
import './BrandSlider.css';
import star from '../../assets/images/slider/star.png';
import brandLogo1 from '../../assets/images/slider/logo-01.png';
import brandLogo2 from '../../assets/images/slider/logo-04.png';
import brandLogo3 from '../../assets/images/slider/logo-05.png';

const BrandSlider = () => {
  return (
    <div className="brand__slider">
      <div className="brand__logos">
        <div className="brand__items">
          <div className="brand__star">
            <img src={star} alt="" />
          </div>
          <div className="brand__logo">
            <img src={brandLogo1} alt="" />
          </div>
          <div className="brand__star">
            <img src={star} alt="" />
          </div>
          <div className="brand__logo">
            <img src={brandLogo2} alt="" />
          </div>
          <div className="brand__star">
            <img src={star} alt="" />
          </div>
          <div className="brand__logo">
            <img src={brandLogo3} alt="" />
          </div>
        </div>

        <div className="brand__items">
          <div className="brand__star">
            <img src={star} alt="" />
          </div>
          <div className="brand__logo">
            <img src={brandLogo1} alt="" />
          </div>
          <div className="brand__star">
            <img src={star} alt="" />
          </div>
          <div className="brand__logo">
            <img src={brandLogo2} alt="" />
          </div>
          <div className="brand__star">
            <img src={star} alt="" />
          </div>
          <div className="brand__logo">
            <img src={brandLogo3} alt="" />
          </div>
        </div>

        <div className="brand__items">
          <div className="brand__star">
            <img src={star} alt="" />
          </div>
          <div className="brand__logo">
            <img src={brandLogo1} alt="" />
          </div>
          <div className="brand__star">
            <img src={star} alt="" />
          </div>
          <div className="brand__logo">
            <img src={brandLogo2} alt="" />
          </div>
          <div className="brand__star">
            <img src={star} alt="" />
          </div>
          <div className="brand__logo">
            <img src={brandLogo3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
