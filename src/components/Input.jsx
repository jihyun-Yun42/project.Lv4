import React from 'react';
import styled from 'styled-components';

function Input(props) {
  return (
    <StyledInput
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required
    />
  );
}
export const StyledInput = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 0.5px solid black;
`;

export default Input;
