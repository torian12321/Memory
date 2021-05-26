import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  max-width: 380px;
  @media (min-width: 480px) {
    max-width: 500px;
  }
`;