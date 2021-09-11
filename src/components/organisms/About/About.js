import React from 'react';
import { Wrapper } from 'components/organisms/About/About.style';
import AboutIntro from 'components/molecules/AboutIntro/AboutIntro';
import AboutDescription from 'components/molecules/AboutDescription/AboutDescription';
import Technologies from 'components/molecules/Technologies/Technologies';

const About = () => {
  return (
    <Wrapper>
      <AboutIntro />
      <AboutDescription />
      <Technologies />
    </Wrapper>
  );
};

export default About;
