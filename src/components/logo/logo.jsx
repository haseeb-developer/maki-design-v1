import React from 'react';
import './logo.css';

const logo = () => {
  return (
    <div>
      <a href="/" className="header__logo__icon">
        <svg
          width="119"
          height="50"
          className="header__logo__icon--svg"
          viewBox="0 0 119 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.14211 50V10.31H0.812109L1.79211 0.999997H8.37211L15.3021 0.929998L18.6621 27.39L22.0921 0.999997H35.2521V50H25.7321V20.74L22.0221 43H15.3721L11.6621 20.74V50H2.14211ZM38.068 50L43.878 10.31H42.408L43.388 0.999997H59.698L66.908 50H57.458L56.408 43H48.568L47.518 50H38.068ZM49.898 33.69H55.078L52.488 16.19L49.898 33.69ZM70.3648 50V10.31H69.0348L70.0148 0.999997H79.8848V13.81L85.9048 0.999997H95.0048L85.4148 21.44L96.2648 50H87.1648L79.8848 30.82V50H70.3648ZM98.6655 50V10.31H97.3355L98.3155 0.999997H108.186V50H98.6655ZM111.007 50V42.79H118.217V50H111.007Z"
            className="header__logo"
          />
        </svg>
      </a>
    </div>
  );
};

export default logo;
