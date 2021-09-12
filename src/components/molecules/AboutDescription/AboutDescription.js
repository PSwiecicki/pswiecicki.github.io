import React from 'react';
import { Wrapper } from './AboutDescription.styles';

const AboutDescription = () => {
  return (
    <Wrapper>
      <h3>
        <span className="first-word">About</span> me:{' '}
      </h3>
      <p>Hi! My name is Patryk, I'm 27 years old and live in Wrocław.</p>
      <p>
        I graduated from the first-cycle studies at the Wrocław University of
        Technology in the field of electronics and telecommunications. I am
        currently starting my third year of extramural studies in Computer
        Science. During these studies, I wrote applications in Java, operated on
        databases using SQL queries, completed the CCNA1 course, created simple
        pages using PHP and completed the 'AWS Academy Cloud Foundations'
        course.
      </p>
      <p>
        During my studies at the Wrocław University of Technology, I started
        working as a tester, which I also continued after starting my IT
        studies. Nevertheless, I wanted to take up programming, which was more
        fun and interesting for me. I am currently looking for a job or
        internship as a junior front-end developer.
      </p>
    </Wrapper>
  );
};

export default AboutDescription;
