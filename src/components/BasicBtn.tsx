import React from "react";
import styled, { css } from "styled-components";

export type Props = {
  children: React.ReactNode;
  btnType: "default" | "highlighted";
  width?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const BasicBtn: React.FC<Props> = ({
  children,
  btnType,
  onClick,
  width,
  disabled,
}) => {
  return (
    <Container
      btnType={btnType}
      onClick={onClick}
      width={width}
      disabled={disabled}
    >
      {children}
    </Container>
  );
};

export default BasicBtn;

interface BtnProps {
  width?: string;
}

const defaultButton = css`
  background: hsl(205, 46%, 92%);
  color: hsl(205, 47%, 42%);
  border: 1px solid #9fa6ad;

  &:hover {
    background-color: #b3d3ea;
  }
`;

const highlightedButton = css<BtnProps>`
  background: #0a96ff;
  color: #fff;
  border: 1px solid hsl(205, 41%, 63%);
  width: ${(props) => props.width || "100%"};

  &:hover {
    background-color: #0074cc;
  }
`;

const Container = styled.button<Props>`
  border-radius: 3px;
  padding: 8px 10px;
  cursor: pointer;

  ${(props) => {
    switch (props.btnType) {
      case "default":
        return defaultButton;
      case "highlighted":
        return highlightedButton;
      default:
        return defaultButton;
    }
  }}
`;
