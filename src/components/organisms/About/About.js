import React from 'react';
import { Wrapper } from 'components/organisms/About/About.style';
import AboutIntro from 'components/molecules/AboutIntro/AboutIntro';
import Technologies from 'components/molecules/Technologies/Technologies';

const About = () => {
  return (
    <Wrapper>
      <AboutIntro />
      <div className="about-myself">
        <h3>About me: </h3>
        <p>Hi! My name is Patryk, I'm 27 years old and live in Wrocław.</p>
        <p>
          I graduated from the first-cycle studies at the Wrocław University of
          Technology in the field of electronics and telecommunications. I am
          currently starting my third year of extramural studies in Computer
          Science.{' '}
        </p>
        <p>
          During my studies at the Wrocław University of Technology, I started
          working as a tester, which I also continued after starting my IT
          studies. Nevertheless, I wanted to take up programming, which was more
          fun and interesting for me. I am currently looking for a job or
          internship as a junior front-end developer.{' '}
        </p>
      </div>
      <Technologies />
    </Wrapper>
  );
};

export default About;
