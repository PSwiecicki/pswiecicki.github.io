import React, { useState } from 'react';
import { Wrapper, StyledLink } from './Navigation.style';

const Navigation = () => {
  const [color, setColor] = useState('Red');

  const handleOnClick = (e) => {
    const color = e.target.attributes.color.value;
    setColor(color);
  };

  return (
    <Wrapper color={color}>
      <StyledLink
        as="a"
        left
        color={color}
        href="https://github.com/pswiecicki/"
      >
        <img src="/assets/icons/GitHub-Light-32.png" alt="GitHub logo" />
        My Github
      </StyledLink>
      <StyledLink onClick={handleOnClick} color="Red" to="/" exact>
        About
      </StyledLink>
      <StyledLink onClick={handleOnClick} color="Green" to="/works">
        Works
      </StyledLink>
      <StyledLink onClick={handleOnClick} color="Blue" to="/contact">
        Contact
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
