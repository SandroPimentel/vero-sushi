import React, { useEffect, useState } from 'react';
import '../styles/sections/Home.scss';
import video from '../assets/home_sushi_video.mp4';
import { Link } from 'react-scroll';
import Arrow from '../assets/arrow.svg';
import ArrowHover from '../assets/arrow-hover.svg';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false); 

  useEffect(() => {
    const homeContent = document.querySelector('.home-content');
    const videoElement = document.querySelector('.home video');
    homeContent.classList.add('transition-triggered');
    videoElement.classList.add('transition-triggered');

    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []); 

  return (
    <div className={`home ${isLoaded ? 'loaded' : ''}`}>
      <div className="overlay"></div>
      <div className='home-content'>
        <h1>Savourez l'art du sushi.</h1>
        <h3>Sushi frais, à emporter : une expérience gourmande à découvrir.</h3>
        <Link className="order-link" to="order" smooth={true}>
          <button>Commander</button>
        </Link>
      </div>
      <Link
        className="down-button"
        to="menu"
        smooth={true}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className={`icon ${isLoaded ? 'loaded' : ''}`}>
          <img
            src={isHovered ? ArrowHover : Arrow}
            className="arrow"
            alt="arrow"
          />
        </span>
        <span className="text">Menu</span>
      </Link>
      <video src={video} autoPlay loop muted />
    </div>
  );
};

export default Home;
