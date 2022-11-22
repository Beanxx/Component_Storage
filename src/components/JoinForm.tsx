import React, { useState } from "react";
import styled from "styled-components";
import LoginInput from "./LoginInput";
import BasicBtn from "./BasicBtn";

function JoinForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [flag, setFlag] = useState(false);

  const JoinFunc = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setFlag(true);
  };

  return (
    <Container>
      <Form>
        <LoginInput
          type="text"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        >
          NickName
        </LoginInput>
        <LoginInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        >
          Email
        </LoginInput>
        <LoginInput
          type="password"
          value={pw}
          onChange={(e) => setPw(e.currentTarget.value)}
        >
          Password
        </LoginInput>
        <LoginInput
          type="password"
          value={pwConfirm}
          onChange={(e) => setPwConfirm(e.currentTarget.value)}
        >
          Password Confirm
        </LoginInput>

        <BasicBtn
          disabled={flag}
          btnType="highlighted"
          onClick={(e) => JoinFunc(e)}
        >
          Sign up
        </BasicBtn>
      </Form>
    </Container>
  );
}

export default JoinForm;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Arial";

  svg {
    margin: 0 4px;
  }
`;

const Form = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 7px;
  background-color: #fff;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  padding: 20px;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
