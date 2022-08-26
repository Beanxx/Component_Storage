// 디자인 참고: https://www.youtube.com/watch?v=yE_CKgG9gcQ
// 색 gradient 참고: https://webgradients.com/

import React from "react";
import styled from "styled-components";
import "../App.css";

function IconButton() {
  return (
    <Container>
      <ul>
        <li>
          <Icon>
            <i className="fa-solid fa-house-chimney"></i>
          </Icon>
          <Hover className="text">Home</Hover>
        </li>
      </ul>
    </Container>
  );
}

export default IconButton;

const Container = styled.span`
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Silkscreen";

  ul {
    position: relative;
    display: flex;
    gap: 30px;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      list-style: none;
      width: 70px;
      height: 70px;
      background: #fff;
      border-radius: 60px;
      cursor: pointer;
      box-shadow: 0 16px 25px rgba(0, 0, 0, 0.2);
      transition: 0.5s;

      &:hover {
        width: 180px;
        box-shadow: 0 16px 25px rgba(0, 0, 0, 0.2);

        ::before {
          opacity: 1;
        }

        ::after {
          opacity: 0.5;
        }
      }

      ::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 60px;
        background: linear-gradient(-45deg, #a6c0fe 0%, #f68084 100%);
        opacity: 0;
        color: white;
        transition: 0.5s;
      }

      ::after {
        content: "";
        position: absolute;
        top: 10px;
        width: 100%;
        height: 100%;
        border-radius: 60px;
        background: linear-gradient(-45deg, #33ccff 0%, #ff99cc 100%);
        transition: 0.5s;
        filter: blur(15px);
        z-index: -1;
        opacity: 0;
      }

      i {
        color: #777;
        font-size: 1em;
        transition: 0.5s;
        transition-delay: 0.25s;
      }

      &:hover i {
        transform: scale(0);
        color: #fff;
        transition-delay: 0s;
      }

      &:hover .text {
        transform: scale(
          1
        ); // hover되었을 때 scale(0)으로 설정했던 글자를 보이도록 설정
        transition-delay: 0.2s;
      }
    }
  }
`;

const Icon = styled.span`
  position: relative;
  top: 31px;
  left: 30px;
  font-size: 30px;
  cursor: pointer;
  transition: none;
  margin: 100px auto;
  width: 300px;
  height: 100px;
`;

const Hover = styled.span`
  color: #fff;
  font-size: 1.1rem;
  letter-spacing: 0.1em;
  transform: scale(0); // 크기를 0으로 즉, 안 보이도록
  transition: 0.5s;
  transition-delay: 0.2s;
  position: relative;
  right: 33%;
`;
