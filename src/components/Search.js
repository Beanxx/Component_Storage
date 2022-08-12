import React, { useState } from "react";
import styled from "styled-components";

const FRONT_LIST = [
  { id: 0, data: "Angular" },
  { id: 1, data: "Emotion" },
  { id: 2, data: "GraphQL" },
  { id: 3, data: "NextJS" },
  { id: 4, data: "ReactJS" },
  { id: 5, data: "VueJS" },
  { id: 6, data: "Redux" },
  { id: 7, data: "Recoil" },
  { id: 8, data: "Storybook" },
  { id: 9, data: "StyledComponent" },
  { id: 10, data: "HTML" },
  { id: 11, data: "CSS" },
  { id: 12, data: "JavaScript" },
  { id: 13, data: "TypeScript" },
];

function Search() {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = FRONT_LIST.filter((el) => {
    return el.data.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <>
      <Box>
        <Container>
          <Icon>
            <i className="fa-solid fa-magnifying-glass fa-fw"></i>
          </Icon>
          <input
            type="search"
            id="search"
            value={search}
            onChange={onChange}
            autocomplete="off"
          />
        </Container>
      </Box>

      {filtered.map((item) => (
        <List>
          <span>{item.data}</span>
        </List>
      ))}
    </>
  );
}

export default Search;

const Box = styled.div`
  margin: 100px auto;
  width: 300px;
  height: 100px;
`;

const Container = styled.div`
  width: 300px;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;

  &:hover {
    input {
      width: 255px;
    }
  }

  input {
    width: 60px;
    height: 60px;
    background: white;
    border: 2px solid #d5d5d5;
    font-size: 1rem;
    float: right;
    padding-left: 20px;
    padding-right: 35px;
    border-radius: 50px;

    -webkit-transition: width 0.55s ease;
    transition: width 0.55s ease;

    &:focus,
    &:active {
      width: 255px;
    }

    // input type="search" 우측 x 아이콘 삭제
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }
  }
`;

const Icon = styled.span`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: 108px;
  margin-top: 18px;
  z-index: 1;
  color: #4f5b66;
  font-size: 20px;
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  font-size: 1.2rem;
`;
