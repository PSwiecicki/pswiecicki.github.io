import styled from 'styled-components';

export const FixedMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  justify-content: flex-end;
`;
