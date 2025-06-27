import { useParams } from "react-router-dom";
import fetchArticle from "../utils/FetchArticle";
import { useState, useEffect } from "react";
import { Vote } from "./Vote";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    const asyncGetArticle = async () => {
      const entry = await fetchArticle(article_id);
      setArticle({ ...entry.article });
    };
    asyncGetArticle();
  }, [article_id]);

  const published = String(new Date(article.created_at));

  return (
    <section className="article">
      <h4>{article.title}</h4>
      <p>Author: {article.title}</p>
      <p>Topic: {article.topic}</p>
      <p>UpVotes: {article.votes}</p>
      <p>Published: {published}</p>
      <img src={article.article_image_url} />
      <Vote article_id={article_id} setVotes={setVotes} votes={votes} />
    </section>
  );
};
export default Article;
