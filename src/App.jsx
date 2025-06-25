import { Route, Routes } from "react-router-dom";
import "./index.css";

import ArticleList from "./components/ArticleList";
import Article from "./components/Article";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<ArticleList />} />
        <Route path={"/articles/:article_id"} element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
