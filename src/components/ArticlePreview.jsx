import { Link } from "react-router-dom";

const ArticlePreview = ({ article }) => {
  return (
    <section className="articlepreview">
      <h3>{article.title}</h3>
      <p>Author: {article.title}</p>
      <p>Topic: {article.topic}</p>
      <p>UpVotes: {article.votes}</p>
      <p>Comments: not ready</p>
      <p>Published: not ready</p>
      <img src={article.article_image_url} />
      <Link to={`/articles/${article.article_id}`}>See Article...</Link>
    </section>
  );
};

export default ArticlePreview;
