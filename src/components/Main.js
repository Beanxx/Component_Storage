import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import styled from "styled-components";
import "../App.css";

function Main() {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <NavLink to="/search">
        <Button>SearchBar</Button>
      </NavLink>
      <NavLink to="/iconbutton">
        <Button>Button</Button>
      </NavLink>
      <NavLink to="/modal">
        <Button>Modal</Button>
      </NavLink>
      <NavLink to="/login">
        <Button>LoginForm</Button>
      </NavLink>
      <NavLink to="/join">
        <Button>JoginForm</Button>
      </NavLink>
      <NavLink to="/page">
        <Button>Pagination</Button>
      </NavLink>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Silkscreen";
`;
