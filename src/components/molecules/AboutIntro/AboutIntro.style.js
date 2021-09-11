import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    width: 100%;
    margin-right: 400px;
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
    max-width: 400px;
    margin-left: auto;
    float: right;
  }
`;
