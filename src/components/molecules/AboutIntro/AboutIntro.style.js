import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;

  @keyframes appear-left {
    0% {
      transform: translateX(-110vw);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes appear-right {
    0% {
      transform: translateX(110vw);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes appear-top {
    0% {
      transform: translateY(-100vh);
    }
    100% {
      transform: translateY(0);
    }
  }

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
    transform: translateY(-100vh);
    font-size: 3rem;
    margin: 0;
    animation: appear-top 0.5s ease-out 1s 1 forwards;
  }

  h4 {
    font-size: 1.5rem;
    transform: translateX(-150vw);
    animation: appear-right 0.5s ease-out 2s 1 forwards;
  }

  img {
    max-width: 800px;
    margin-left: auto;
    float: right;
  }

  h1 {
    animation: appear-left 0.5s ease-out 0s 1 forwards;
  }

  .red {
    color: ${({ theme }) => theme.colors.red};
  }

  .green {
    color: ${({ theme }) => theme.colors.green};
  }

  .blue {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
