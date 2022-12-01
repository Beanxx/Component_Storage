import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";
import IconButton from "./components/IconButton";
import ShowModalPage from "./ShowModalPage";
import LoginForm from "./components/LoginForm";
import JoinForm from "./components/JoinForm.tsx";
import Page from "./components/Page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/iconbutton" element={<IconButton />} />
        <Route path="/modal" element={<ShowModalPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/join" element={<JoinForm />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
