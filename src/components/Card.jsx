import React from 'react';
import styled from 'styled-components';

function Card({ children, onClick }) {
  return <CardBody onClick={onClick}>{children}</CardBody>;
}
const CardBody = styled.div`
  width: 300px;
  height: 350px;
  background-color: #f6f7fb;

  border-radius: 20px;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    border: 1.5px solid black;
  }
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export default Card;
