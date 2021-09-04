import styled from 'styled-components';

export const StyledLink = styled.a`
  text-align: center;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  justify-self: ${({ left }) => (left ? 'flex-start' : 'auto')};
  margin-right: ${({ left }) => (left ? 'auto' : 0)};

  div {
    height: 32px;
    width: 32px;
    margin-right: 10px;
    background: url(${({ iconSrc }) => (iconSrc ? iconSrc.primary : '')});
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.darkGrey};

    div {
      background: url(${({ iconSrc }) => (iconSrc ? iconSrc.secondary : '')});
    }
  }
`;
