import styled from "styled-components";

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
  height: ${(props) => props.width || "60px"};
  transition-duration: 0.4s;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin: 10px;

  &:hover {
    background: linear-gradient(-45deg, #6f86d6 0%, #48c6ef 100%);
    cursor: pointer;
  }
`;
