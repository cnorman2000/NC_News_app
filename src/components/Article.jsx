import { useParams } from "react-router-dom";
import fetchArticle from "../utils/FetchArticle";
import { useState, useEffect } from "react";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    const asyncGetArticle = async () => {
      const entry = await fetchArticle(article_id);
      setArticle({ ...entry.article });
      console.log(entry);
    };
    asyncGetArticle();
  }, [article_id]);

  return (
    <section className="article">
      <h3>{article.title}</h3>
      <h4>{article.title}</h4>
      <p>Author: {article.title}</p>
      <p>Topic: {article.topic}</p>
      <p>UpVotes: {article.votes}</p>
      <p>Comments: not ready</p>
      <p>Published: not ready</p>
      <img src={article.article_image_url} />
    </section>
  );
};
export default Article;
