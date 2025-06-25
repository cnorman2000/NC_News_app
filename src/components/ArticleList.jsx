import fetchArticles from "../utils/FetchArticles";
import ArticlePreview from "./ArticlePreview";
import { useState, useEffect } from "react";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const asyncGetArticles = async () => {
      const { articles } = await fetchArticles();

      setArticles([...articles]);
    };

    asyncGetArticles();
  }, []);
  return (
    <section className="articlelist">
      <h5>All Articles</h5>
      {articles.map((article) => (
        <ArticlePreview key={article.article_id} article={article} />
      ))}
    </section>
  );
}

export default ArticleList;
