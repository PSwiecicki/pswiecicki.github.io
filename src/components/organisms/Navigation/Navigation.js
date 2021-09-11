import React from 'react';
import { Wrapper, StyledLink } from './Navigation.style';

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink left as="a" href="https://github.com/pswiecicki/">
        <img src="/assets/icons/GitHub-Light-32.png" alt="GitHub logo" />
        My Github
      </StyledLink>
      <StyledLink to="/" exact>
        About
      </StyledLink>
      <StyledLink to="/works">Works</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
