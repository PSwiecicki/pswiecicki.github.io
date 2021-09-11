import React from 'react';
import { Wrapper } from './ImageList.style';

const technologiesLinks = new Map();

const ImageList = ({ technologies }) => {
  technologies.map((tech) => {
    return technologiesLinks.set(
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
        return (
          <div>
            <img alt={value} src={technologiesLinks.get(value)} />
            <p>{value}</p>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default ImageList;
