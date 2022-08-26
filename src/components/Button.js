import styled from "styled-components";
import "../App.css";

export const Button = styled.button`
  /* background: ${(props) => props.background || "#2584f4"}; */
  background: linear-gradient(-45deg, #48c6ef 0%, #6f86d6 100%);
  color: ${(props) => props.color || "white"};
  border: 1px solid #bdbdbd;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 50px;
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "60px"};
  transition-duration: 0.4s;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin: 10px;
  outline: 0;
  font-family: "Silkscreen";

  &:hover {
    background: linear-gradient(-45deg, #6f86d6 0%, #48c6ef 100%);
    cursor: pointer;
  }
`;

export const ButtonPrimary = styled.button`
  background: ${(props) => props.background || "#0A96FF"};
  color: ${(props) => props.color || "#fff"};
  border-radius: 3px;
  border: 1px solid ${(props) => props.border || "hsl(205,41%,63%)"};
  width: ${(props) => props.width || "68.44px"};
  height: ${(props) => props.height || "33px"};
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
  transition-duration: 0.4s;
  font-size: 13px;
  text-align: center;
  padding: 8px 10.4px;
  margin: 0 0 0 4px;

  &:hover {
    opacity: 0.9;
  }
`;

export const ButtonSNS = styled.button`
  background: ${(props) => props.background || "#fff"};
  color: ${(props) => props.color || "#3b4045"};
  border-radius: 5px;
  border: 1px solid ${(props) => props.border || "transparent"};
  width: ${(props) => props.width || "285px"};
  height: ${(props) => props.height || "40px"};
  transition-duration: 0.4s;
  font-size: 13px;
  text-align: center;
  padding: 10.4px;
  margin: 4px 0;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }
`;
