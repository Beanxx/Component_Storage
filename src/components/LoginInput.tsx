import React from "react";
import styled from "styled-components";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputType {
  children: React.ReactNode;
  id: string;
  type?: string;
}

interface Props extends InputType {
  register?: UseFormRegisterReturn;
}

const LoginInput = React.forwardRef((props: Props, ref) => {
  return (
    <Container>
      <Box>
        <label htmlFor="title">{props.children}</label>
      </Box>

      <input
        id={props.id}
        type={props.type}
        autoComplete="off"
        ref={ref}
        {...props.register}
      />
    </Container>
  );
});

export default LoginInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    border: 1px solid #babfc4;
    border-radius: 3px;
    padding: 8px 9px;
    margin-bottom: 3px;

    ::placeholder {
      color: red;
      font-style: italic;
    }
  }
`;

const Box = styled.div`
  label {
    padding: 0 2px;
    font-size: 14px;
    font-weight: 600;
  }

  span {
    float: right;
    font-size: 12px;
    color: #0074cc;
  }
`;
