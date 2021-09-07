import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 200px;
    margin-right: 20px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.blue};
  }
`;
