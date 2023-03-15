import styled from 'styled-components';

export const Button = ({ children, onClick, type }) => {
  return (
    <Btn onClick={onClick} type={type}>
      {children}
    </Btn>
  );
};

const Btn = styled.button`
  border: 1px solid #3b4270;
  border-radius: 10px;
  padding: 3px 6px;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
`;
