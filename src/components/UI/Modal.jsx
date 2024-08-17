import React from "react";
import styled from "styled-components";

const Modal = ({ children }) => {
  return (
    <StyledModal  >
      <div>{children}</div>
    </StyledModal>
  );
};

export default Modal;
const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  position: absolute;
  right: 33%;
  z-index: 10;
  & > div {
    width: 500px;
    height: 250px;
    background-color: white;
    background-image: url(https://avatars.mds.yandex.net/i?id=1ffcad844925389bf019fbc0cf2ee24c0b7777b6-4120702-images-thumbs&n=13);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
