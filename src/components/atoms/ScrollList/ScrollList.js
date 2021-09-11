import Technologies from 'components/molecules/Technologies/Technologies';
import React from 'react';
import { Wrapper } from './ScrollList.style';

const technologiesLinks = new Map();

const ScrollList = ({ technologies }) => {
  technologies.map((tech) => {
    technologiesLinks.set(
      tech,
      `/assets/img/tech/${tech
        .toLowerCase()
        .replace(/ /g, '')
        .replace(/#/g, 'sharp')}.png`
    );
  });

  return (
    <Wrapper>
      {technologies.map((value) => {
        return <img alt={value} src={technologiesLinks.get(value)} />;
      })}
    </Wrapper>
  );
};

export default ScrollList;
