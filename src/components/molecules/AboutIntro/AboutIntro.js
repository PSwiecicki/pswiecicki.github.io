import React from 'react';
import { Wrapper } from './AboutIntro.style';

const AboutIntro = () => {
  return (
    <Wrapper>
      <img src="assets/img/my-photo.png" alt="My github avatar"></img>
      <div className="container">
        <h1>Hi!</h1>
        <div className="intro-text">
          <h2>My name is Patryk</h2>
          <h3>and I want to become a&nbsp;great Developer.</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutIntro;
