import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";
import IconButton from "./components/IconButton";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/iconbutton" element={<IconButton />} />
      </Routes>
    </div>
  );
}

export default App;
