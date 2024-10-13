import React from 'react';
import videoSrc from '../../assets/images/waves_video.mp4';
import './shineywaves.css';

const shineywaves = () => {
  return (
    <div className="shineywaves">
      <video
        className="shineywaves__video"
        src={videoSrc}
        autoPlay
        loop={true}
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default shineywaves;
