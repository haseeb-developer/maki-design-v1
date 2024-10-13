import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [touchedFields, setTouchedFields] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields({ ...touchedFields, [name]: true });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="form__section__container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`form__input ${
              touchedFields.name && !formData.name ? 'form__input--error' : ''
            }`}
            required
          />
          <label
            className={`form__label ${
              formData.name ? 'form__label--shrink' : ''
            }`}
          >
            Name
          </label>
        </div>

        <div className="form__group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`form__input ${
              touchedFields.email && !formData.email ? 'form__input--error' : ''
            }`}
            required
          />
          <label
            className={`form__label ${
              formData.email ? 'form__label--shrink' : ''
            }`}
          >
            Email
          </label>
        </div>

        <div className="form__group">
          <input
            type="text"
            name="company"
            value={formData.company}
            onBlur={handleBlur}
            onChange={handleInputChange}
            className="form__input"
          />
          <label
            className={`form__label ${
              formData.company ? 'form__label--shrink' : ''
            }`}
          >
            Company Name
          </label>
        </div>

        <div className="form__group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={7}
            onBlur={handleBlur}
            className={`form__input form__textarea ${
              touchedFields.message && !formData.message
                ? 'form__input--error'
                : ''
            }`}
            required
          ></textarea>
          <label
            className={`form__label ${
              formData.message ? 'form__label--shrink' : ''
            }`}
          >
            Message
          </label>
        </div>

        <div className="form__submit__btn">
          <button type="submit" className="form__button">
            Send Message{' '}
            <svg
              width="20"
              height="20"
              className="form__button__svg"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.025 4.94165L17.0834 9.99998L12.025 15.0583"
                className="form__button__svg"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.91669 10H16.9417"
                className="form__button__svg"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
