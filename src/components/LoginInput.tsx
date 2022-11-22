import React from "react";
import styled from "styled-components";

export type Props = {
  children: React.ReactNode;
  value: string;
  type: string;
  sub?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginInput: React.FC<Props> = ({
  children,
  value,
  type,
  sub,
  onChange,
}) => {
  return (
    <Container>
      <Box>
        <label htmlFor="title">{children}</label>
        <span>{sub}</span>
      </Box>

      <input
        defaultValue={value}
        onChange={onChange}
        type={type}
        autoComplete="off"
      />
    </Container>
  );
};

export default LoginInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 7px;

  input {
    border: 1px solid #babfc4;
    border-radius: 3px;
    padding: 8px 9px;

    ::placeholder {
      color: red;
      font-style: italic;
    }
  }
`;

const Box = styled.div`
  label {
    padding: 0 2px;
    font-size: 15px;
    font-weight: 600;
  }

  span {
    float: right;
    font-size: 12px;
    color: #0074cc;
  }
`;
