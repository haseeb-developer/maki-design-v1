import React from 'react';
import './Technology.css'; // For styling
import videoSrc from '../../assets/images/tech.mp4';
import TechSlider from '../TechSlider/TechSlider';

const VideoBackground = () => {
  return (
    <div className="video__container">
      <div className="video-section">
        <video
          id="background-video"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        <div className="technology__header">
          <div className="technology__header__content">
            <p>Our Tech Stack</p>
            <h4>Technology We Trust</h4>
          </div>
          <div className="technology__description">
            <p>
              At MAKI, we leverage a diverse and cutting-edge technology stack
              to deliver innovative solutions tailored to your business needs.
              From front-end frameworks to cloud infrastructures and AI tools,
              we use the best technologies to ensure scalability, security, and
              efficiency.{' '}
            </p>
            <div className="technology__link">
              <a href="/">
                Get a Free Consultation{' '}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.025 4.94168L17.0834 10L12.025 15.0583"
                    stroke="black"
                    className="svg__arrow__link"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.91669 10H16.9417"
                    stroke="black"
                    className="svg__arrow__link"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="technology__tech__slider">
            <TechSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
