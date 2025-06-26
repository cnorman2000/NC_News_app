import { Route, Routes } from "react-router-dom";
import "./index.css";

import ArticleList from "./components/ArticleList";

import ArticleandComments from "./components/ArticleandComments";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<ArticleList />} />
        <Route
          path={"/articles/:article_id"}
          element={<ArticleandComments />}
        />
      </Routes>
    </>
  );
}

export default App;
