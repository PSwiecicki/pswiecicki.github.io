import React, { useState } from 'react';
import NormalList from 'components/atoms/NormalList/NormalList';
import SwitchButton from 'components/atoms/SwitchButton/SwitchButton';
import { Wrapper } from './Technologies.style';
import ImageList from 'components/atoms/ImageList/ImageList';

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
  const [isNormalList, setIsNormalList] = useState(true);

  const handleSwitchChange = () => {
    setIsNormalList(!isNormalList);
  };

  return (
    <Wrapper>
      <h3>
        <span className="first-word">Known</span> technologies:
      </h3>
      <div className="switch-button">
        <p>Normal List </p>
        <SwitchButton handleOnChange={handleSwitchChange} />
        <p>Image List</p>
      </div>
      <div className="list">
        {isNormalList ? (
          <NormalList technologies={technologies} />
        ) : (
          <ImageList technologies={technologies} />
        )}
      </div>
    </Wrapper>
  );
};

export default Technologies;
