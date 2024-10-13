import React from 'react';
import './FormSection.css';
import borderLine from '../../assets/images/form__border__img.png';
import Form from './Form';

const FormSection = () => {
  return (
    <div className="form__container">
      <div className="form__details">
        <div className="form__details__header">
          <h4>Let's Build Something Great Together</h4>
        </div>
        <img src={borderLine} alt="" className="border__line__img" />
        <Form />
      </div>
    </div>
  );
};

export default FormSection;
