import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Info from '../../components/info/Info';
import ShineyWaves from '../../components/shineywaves/shineywaves';

const hero = () => {
  return (
    <div>
      <HeroSection />
      <Info />
      <ShineyWaves />
    </div>
  );
};

export default hero;
