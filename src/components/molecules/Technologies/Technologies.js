import React from 'react';
import NormalList from 'components/atoms/NormalList/NormalList';
import SwitchButton from 'components/atoms/SwitchButton/SwitchButton';
import { Wrapper } from './Technologies.style';
import ScrollList from 'components/atoms/ScrollList/ScrollList';

const technologies = [
  'HTML 5',
  'CSS 3',
  'JavaScript ES6',
  'Bootstrap',
  'React',
  'Git',
  'C#',
];

const Technologies = () => {
  return (
    <Wrapper>
      <h3>Known technologies:</h3>
      <div>
        <p>Normal List </p>
        <SwitchButton />
        <p>Scroll List</p>
      </div>
      <NormalList technologies={technologies} />
      <ScrollList technologies={technologies} />
    </Wrapper>
  );
};

export default Technologies;
