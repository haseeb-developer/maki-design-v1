// Process.js
import React from 'react';
import ProcessStep from './ProcessStep';
import processOne from '../../assets/svg/process_one.png';
import processTwo from '../../assets/svg/process_two.png';
import processThree from '../../assets/svg/process_three.png';
import processFour from '../../assets/svg/process_four.png';
import processFive from '../../assets/svg/process_five.png';
import star from '../../assets/images/star.png';
import './Process.css';

const Process = () => {
  return (
    <section className="process">
      <section className="process__container">
        <div className="process__details__header">
          <p>Our Process</p>
          <h3>How We Bring Your Ideas To Life</h3>
        </div>
        <div className="process__steps">
          <ProcessStep
            stepNumber="01"
            title="Check Your Need"
            description="Understanding your vision and business goals."
            image={processOne}
          />
          <ProcessStep
            stepNumber="02"
            title="Set Requirements"
            description="Crafting solutions that align with your objectives."
            image={processTwo}
          />
          <ProcessStep
            stepNumber="03"
            title="Contract"
            description="Crafting solutions that align with your objectives."
            image={processThree}
          />
          <ProcessStep
            stepNumber="04"
            title="Design"
            description="Delivering reliable, high-performance software."
            image={processFour}
          />
          <ProcessStep
            stepNumber="05"
            title="Build"
            description="Ensuring smooth implementation and ongoing success."
            image={processFive}
          />
          <div className="process__cta">
            <div className="process__cta--header">
              <div className="process__cta__img">
                <img src={star} alt="" />
              </div>
              <h3 className="process__cta-title">Get A Free Consultation</h3>
            </div>
            <div className="process__cta__link">
              <a href="/" className="process__cta-button">
                Get Started{' '}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="svg__cta"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.025 4.94168L17.0833 10L12.025 15.0583"
                    className="svg__cta"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.91667 10H16.9417"
                    className="svg__cta"
                    stroke="black"
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
      </section>
    </section>
  );
};

export default Process;
