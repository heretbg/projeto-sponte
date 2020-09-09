import styled from 'styled-components';

export const Label = styled.label`
  margin: 5px 0px;
`;

export const Input = styled.input`
  border: 1px solid ${(props) => (props.error ? '#ff6b6b' : '#222')};
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: #222;
  margin: 0 0 10px;
`;

export const Error = styled.div`
  color: #ff6b6b;
  font-size: 0.8em;
`;

export const Fragmento = styled.div`
  display: flex;
  flex-direction: column;
`
