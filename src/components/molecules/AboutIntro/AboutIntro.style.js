import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
  }

  h1 {
    font-size: 9rem;
    font-weight: 400;
    letter-spacing: 0;
    margin-right: 25px;
  }

  .intro-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 30px;
  }

  h2 {
    font-size: 3rem;
    margin: 0;
  }

  h3 {
    font-size: 1.5rem;
  }

  img {
    max-width: 800px;
    margin-left: auto;
    float: right;
  }

  .red {
    color: ${({ theme }) => theme.colors.red};
  }

  .blue {
    color: ${({ theme }) => theme.colors.blue};
  }

  .green {
    color: ${({ theme }) => theme.colors.green};
  }
`;
