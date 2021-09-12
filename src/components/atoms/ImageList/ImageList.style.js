import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  & > * {
    flex-basis: 25%;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  img {
    max-width: 100px;
    margin-bottom: 5px;
  }

  p {
    text-align: center;
    font-weight: bold;
  }

  div:hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translateX(0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translateX(-1px);
    }

    20%,
    80% {
      transform: translateX(2px);
    }

    30%,
    50%,
    70% {
      transform: translateX(-4px);
    }

    40%,
    60% {
      transform: translateX(4px);
    }
  }
`;
