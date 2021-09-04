import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './NavBarButton.style';

const NavBarButton = ({ name, left, href, iconSrc }) => (
  <StyledLink left={left} href={href} iconSrc={iconSrc}>
    {iconSrc ? <div></div> : <></>}
    {name}
  </StyledLink>
);

NavBarButton.propTypes = {
  left: PropTypes.bool,
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  iconSrc: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
  }),
};

export default NavBarButton;
