import React from "react";
import styled from "styled-components";
import { ButtonPrimary, ButtonSNS } from "../components/Button";
import Input from "../components/Input";
import { NavLink } from "react-router-dom";

import { ReactComponent as GoogleImg } from "../assets/google.svg";
import { ReactComponent as GithubImg } from "../assets/github.svg";
import { ReactComponent as FacebookImg } from "../assets/facebook.svg";
import { ReactComponent as TalentImg } from "../assets/signupTalent.svg";

function LoginForm() {
  return (
    <Container>
      <SNSBox>
        <ButtonSNS border="#d6d9dc">
          <GoogleImg />
          Log in with Google
        </ButtonSNS>
        <ButtonSNS background="#2f3337" color="#fff" border="#d6d9dc">
          <GithubImg />
          Log in with GitHub
        </ButtonSNS>
        <ButtonSNS background="#385499" color="#fff" border="#f1f2f3">
          <FacebookImg />
          Log in with Facebook
        </ButtonSNS>
      </SNSBox>

      <LoginFormBox>
        <Input>Email</Input>
        <Input sub="Forgot passowrd?">Password</Input>
        <ButtonPrimary
          width="240px"
          height="37px"
          onClick={() => alert("Login ٩( ᐛ )و ")}
        >
          Log in
        </ButtonPrimary>
      </LoginFormBox>
      <Description>
        Don't have an account?
        <NavStyle to="/signup"> Sign up</NavStyle>
      </Description>
      <Description>
        Are you an employer?
        <NavStyle to="/signup"> Sign up on Talent</NavStyle>
        <TalentImg />
      </Description>
    </Container>
  );
}

export default LoginForm;

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

const SNSBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const LoginFormBox = styled.div`
  width: 285px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: #fff;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  padding: 24px;
  margin-bottom: 24px;
`;

const Description = styled.div`
  margin-top: 12px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavStyle = styled(NavLink)`
  text-decoration: none;
  color: #0074cc;
  margin-left: 3px;
`;
