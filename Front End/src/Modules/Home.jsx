import React from 'react';
import StylesH from '../css/home.module.css';
import imagez from '../images/image.jpg'; // Update the path to match the location of your image

const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imagez})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className={StylesH['home-container']} style={backgroundImageStyle}>
      <div className={StylesH['content-container']}>
        <h5 className={StylesH['headline']}>
          Start your journey with us and experience a blend of productivity and enjoyment like never before
        </h5>
      </div>
    </div>
  );
}

export default Home;
