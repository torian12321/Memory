import styled from 'styled-components';

export const Wrapper = styled.footer`
  padding: 18px;
  font-size: 24px;
  background: var(--color-main-lighter);
  color: var(--color-main-darker);
  border-bottom: 1px solid var(--color-main-dark);


  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;