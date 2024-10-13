import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">We Help Entrepreneurs</h1>
        <div className="hero__details">
          <div className="hero__titles">
            <h2 className="hero__title">To Revolutionise</h2>
            <h3 className="hero__title">the world</h3>
          </div>
          <div className="hero__descriptions">
            <p className="hero__description">
              Empowering CEOs and CTOs to achieve more with scalable,
              cutting-edge technologies designed for growth.
            </p>
            <div className="hero__link">
              <a href="/" className="hero__cta">
                Get a Free Consultation{' '}
                <svg
                  width="20"
                  height="20"
                  className="arrow__left__btn__svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.025 4.94165L17.0833 9.99998L12.025 15.0583"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.91666 10H16.9417"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
