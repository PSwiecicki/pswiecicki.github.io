import React from 'react';
import NavBarButton from 'components/atoms/NavBarButton/NavBarButton';
import { FixedMenu } from './NavBar.style';

const pageParts = ['Contact', 'Works', 'About'];

const NavBar = () => (
  <FixedMenu>
    <NavBarButton
      href="https://github.com/PSwiecicki"
      name="GitHub"
      iconSrc={{
        primary: 'assets/icons/GitHub-Light-32.png',
        secondary: 'assets/icons/GitHub-32.png',
      }}
      left={true}
    />
    {pageParts.map((name, id) => (
      <NavBarButton key={id} name={name} href="#" />
    ))}
  </FixedMenu>
);

export default NavBar;
