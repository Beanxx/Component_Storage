import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";

const Page = () => {
  const [posts, setPosts] = useState([]); // 모든 게시글들
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const limit = 5; // 페이지 당 게시글 수
  const offset = (page - 1) * limit; // 페이지 당 첫 게시물 번호
  const totalPage = Math.ceil(posts.length / limit); // 전체 페이지 개수

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Layout>
      <header>
        <h2>Practice Pagination 👀</h2>
      </header>

      <main>
        {posts.slice(offset, offset + limit).map(({ id, title, body }) => (
          <article key={id}>
            <h3>
              {id}. {title}
            </h3>
            <p>{body}</p>
          </article>
        ))}
      </main>

      <footer>
        <Pagination total={totalPage} page={page} setPage={setPage} />
      </footer>
    </Layout>
  );
};

export default Page;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  margin-top: 2rem;

  main {
    margin: 2rem 0;

    article {
      margin: 1rem 0;

      p {
        margin-top: 7px;
      }
    }
  }
`;
