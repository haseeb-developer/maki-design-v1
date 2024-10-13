import React, { useState, useEffect, useCallback } from 'react';
// import infoImage from '../../assets/images/line.png';
import './info.css';

const Info = () => {
  const [clients, setClients] = useState(0);
  const [rating, setRating] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);
  const [countries, setCountries] = useState(0);

  const duration = 3000;
  const intervalTime = 50;

  const totalSteps = duration / intervalTime;
  const clientStep = 15 / totalSteps;
  const ratingStep = 4.5 / totalSteps;
  const countriesStep = 7 / totalSteps;

  const startIncrementing = useCallback(() => {
    let currentClients = 0;
    let currentRating = 0;
    let currentCountries = 0;

    const increment = () => {
      currentClients += clientStep;
      currentRating += ratingStep;
      currentCountries += countriesStep;

      if (
        currentClients >= 15 &&
        currentRating >= 4.5 &&
        currentCountries >= 7
      ) {
        setClients(15);
        setRating(4.5);
        setCountries(7);
        clearInterval(timer);
      } else {
        setClients(currentClients >= 15 ? 15 : currentClients.toFixed(0));
        setRating(currentRating >= 4.5 ? 4.5 : currentRating.toFixed(1));
        setCountries(currentCountries >= 7 ? 7 : currentCountries.toFixed(0));
      }
    };

    const timer = setInterval(increment, intervalTime);
  }, [clientStep, ratingStep, countriesStep]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLineWidth(100);
    }, 0);

    return () => {
      clearTimeout(timer);
      setLineWidth(0);
    };
  }, []);

  useEffect(() => {
    startIncrementing();
  }, [startIncrementing]);

  return (
    <div className="info__section">
      <div className="info__section--block1">
        {/* <img src={infoImage} alt="Informational" className="info__image" /> */}
        <div className="line" style={{ width: `${lineWidth}%` }} />
      </div>
      <div className="info__section--block2">
        <div className="info__details">
          <h3>+{clients}</h3>
          <p>Clients</p>
        </div>

        <div className="info__details">
          <h3>{rating}/5</h3>
          <p>Estrellas</p>
        </div>

        <div className="info__details">
          <h3>+{countries}</h3>
          <p>Países</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
