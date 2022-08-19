import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Modal = ({ isShow, onClose, handleClick, title, children }) => {
  // esc key로 모달창 닫기
  const closeOnKeyDown = (e) => {
    // esc key
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", closeOnKeyDown);
    return () => window.removeEventListener("keydown", closeOnKeyDown);
  }, []);

  return (
    <>
      {isShow ? (
        <ModalContainer onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <Header>
              <Title>{title}</Title>
            </Header>
            <Body>{children}</Body>
            <Footer>
              <InnerButton onClick={onClose}>Close</InnerButton>
              <InnerButton onClick={handleClick}>OK</InnerButton>
            </Footer>
          </ModalContent>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default Modal;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0%);
  }
  to {
    opacity: 0;
    transform: translateY(100%);
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 550px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  border-radius: 5px;
  font-size: 1.1rem;
  animation: ${(props) => (props.isShow ? fadeOut : fadeIn)} 1s;
`;

const Header = styled.div`
  padding: 25px;
  pointer-events: none;
  font-size: 1.1rem;
  background-color: #f4ecdf;
`;

const Title = styled.h4`
  margin: 0;
`;

const Body = styled.div`
  padding: 40px;
  border-top: 3px solid #93928d;
  border-bottom: 3px solid #93928d;
  pointer-events: none;
  background-color: #fef8e9;
`;

const Footer = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4ecdf;
`;

const InnerButton = styled.div`
  border-radius: 5px;
  width: 100px;
  margin: 0 1rem;
  padding: 0.5rem;
  background-color: aliceblue;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  &:hover {
    cursor: pointer;
  }
`;
