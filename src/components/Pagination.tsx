import styled from "styled-components";

const Pagination = ({ total, page, setPage }) => {
  return (
    <>
      <Nav>
        {/* 현재 페이지가 1이면 더이상 왼쪽으로 못 넘어가도록 disabled 설정*/}
        <Button onClick={() => setPage(1)} disabled={page === 1}>
          ⏪
        </Button>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          ◀️
        </Button>
        {Array(total)
          .fill(undefined)
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === total}>
          ▶️
        </Button>

        <Button onClick={() => setPage(total)} disabled={page === total}>
          ⏩
        </Button>
      </Nav>
    </>
  );
};

export default Pagination;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: #fff;
  color: black;
  font-size: 15px;

  &:hover {
    background: #b2ccff;
    cursor: pointer;
  }

  &[disabled] {
    background: #eaeaea;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #b2ccff;
    cursor: revert;
    transform: revert;
  }
`;
