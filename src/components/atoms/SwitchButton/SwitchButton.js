import React from 'react';
import { Wrapper } from './SwitchButton.style';

const SwitchButton = ({ handleOnChange }) => {
  return (
    <Wrapper>
      <label className="switch">
        <input type="checkbox" onChange={handleOnChange} />
        <span className="slider round"></span>
      </label>
    </Wrapper>
  );
};

export default SwitchButton;
