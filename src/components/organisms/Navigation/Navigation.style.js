import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ color, theme }) => theme.colors[color.toLowerCase()]};
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({
  activeClassName,
})`
  text-align: center;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-self: ${({ left }) => (left ? 'flex-start' : 'auto')};
  margin-right: ${({ left }) => (left ? 'auto' : 0)};
  transition: all 0.3s ease-out;

  &.${activeClassName} {
    border-top: 6px solid ${({ color, theme }) => theme.colors['dark' + color]};
    border-bottom: 6px solid
      ${({ color, theme }) => theme.colors['dark' + color]};
  }

  &:hover {
    background-color: ${({ color, theme }) => theme.colors['light' + color]};
    border-color: ${({ color, theme }) => theme.colors['light' + color]};
    transform: translate(3px, 3px);
  }

  img {
    margin-right: 10px;
  }
`;
