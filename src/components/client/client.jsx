import React from 'react';
import './client.css';

const client = () => {
  return (
    <div className="clients">
      <div className="clients__container">
        <div className="client__title">
          <h3>What Our</h3>
          <h3>Clients Say</h3>
        </div>
        <div className="client__logo">
          <div className="client__logo__container">
            <h3>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className="client__logo__svg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM23.22 23.68C23.22 29.84 21.88 31.22 18.3 33.34C18.06 33.48 17.8 33.54 17.54 33.54C17.02 33.54 16.52 33.28 16.24 32.8C15.82 32.08 16.06 31.16 16.76 30.74C19.18 29.3 20.02 28.78 20.18 25.16H16.38C14.2 25.16 12.5 23.46 12.5 21.28V18.32C12.5 16.14 14.2 14.44 16.38 14.44H19.36C21.5 14.44 23.24 16.18 23.24 18.32V23.68H23.22ZM35.5 23.68C35.5 29.84 34.16 31.22 30.58 33.34C30.34 33.48 30.08 33.54 29.82 33.54C29.3 33.54 28.8 33.28 28.52 32.8C28.1 32.08 28.34 31.16 29.04 30.74C31.46 29.3 32.3 28.78 32.46 25.16H28.64C26.46 25.16 24.76 23.46 24.76 21.28V18.32C24.76 16.14 26.46 14.44 28.64 14.44H31.62C33.76 14.44 35.5 16.18 35.5 18.32V23.68Z"
                  fill="#6528F7"
                />
              </svg>
              Success Stories
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default client;
