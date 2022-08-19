import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./components/Button";
import Modal from "./components/Modal";

function ShowModalPage() {
  const [isShow, setIsShow] = useState(false);

  const onClose = () => {
    setIsShow(false);
  };

  const handleClick = () => {
    alert("OK");
    onClose();
  };

  return (
    <Container>
      <Button onClick={() => setIsShow(true)} width="200px">
        Click Me!
      </Button>
      <Modal
        title="my modal"
        onClose={onClose}
        handleClick={handleClick}
        isShow={isShow}
      >
        Put here modal's contents ٩( ᐛ )و
      </Modal>
    </Container>
  );
}

export default ShowModalPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100vw;
  height: 100vh;
`;
