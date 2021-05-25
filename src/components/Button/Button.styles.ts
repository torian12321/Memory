import styled from 'styled-components';

export const Btn = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: .8em 2em;
  font-weight: bold;
  background: var(--color-sec);
  color: #222;
  margin: 20px 0 0;
  &:hover {
    background: var(--color-sec-darker);
  }
}
`;
