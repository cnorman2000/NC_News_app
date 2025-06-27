import { Route, Routes } from "react-router-dom";
import "./index.css";

import Home from "./components/Home";
import ArticleList from "./components/ArticleList";
import ArticleandComments from "./components/ArticleandComments";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path {""} element={<Home />}/> */}
        <Route path={"/articles"} element={<ArticleList />} />
        <Route
          path={"/articles/:article_id"}
          element={<ArticleandComments />}
        />
      </Routes>
    </>
  );
}

export default App;
