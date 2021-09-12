import React from 'react';
import { Wrapper } from './AboutIntro.style';

const AboutIntro = ({ imgLoaded }) => {
  return (
    <Wrapper>
      <img src="assets/img/my-photo.png" alt="My github avatar"></img>
      <div className="container">
        <h1>
          <span className="red">H</span>
          <span className="green">i</span>
          <span className="blue">!</span>
        </h1>
        <div className="intro-text">
          <h2>My name is Patryk</h2>
          <h4>and I want to become a&nbsp;great Developer.</h4>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutIntro;
