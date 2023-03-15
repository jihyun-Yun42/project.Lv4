import styled from 'styled-components';

const ModalBackGround = ({ children, onClick }) => {
  return <Back onClick={onClick}>{children}</Back>;
};
const Back = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #ddd;
  opacity: 0.7;
`;

const ModalBody = ({ children }) => {
  return <Body>{children}</Body>;
};

const Body = styled.div`
  width: 500px;
  height: 600px;
  background-color: white;
  left: 50%;
  right: 50%;
  top: 0;
  transform: translate(-50%, 50%);
  position: absolute;
  border-radius: 20px;
  padding: 30px;
  box-sizing: border-box;
`;

export { ModalBackGround, ModalBody };
