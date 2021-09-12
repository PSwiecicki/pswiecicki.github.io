import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: justify;

  h3 {
    font-size: 35px;
  }

  .first-word {
    color: ${({ theme }) => theme.colors.red};
  }
`;
