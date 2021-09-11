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
`;
