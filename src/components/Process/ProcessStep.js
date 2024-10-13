import React from 'react';
import '../Process/Process';

const ProcessStep = ({ stepNumber, title, description, image }) => {
  return (
    <div className="process__stps--container">
      <div className="process__step">
        <div className="process__step-header">
          <span className="process__step-number">{stepNumber}</span>
          <h3 className="process__step-title">{title}</h3>
        </div>
        <img src={image} alt={title} className="process__step-image" />
        <p className="process__step-description">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
