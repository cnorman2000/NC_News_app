import { useState } from "react";
import { useParams } from "react-router-dom";
import postComment from "../utils/PostComment";

function InsertComment({ setComments, comments }) {
  const { article_id } = useParams();
  const [comment, setComment] = useState();

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDevault();
    const response = await postComment(article_id, comment, "cnorman2000");
    setComment("");
    setComments([...comments, response.newComment]);
  };

  return (
    <section className="addcomment">
      <form onSubmit={handleSubmit}>
        <h4>Make a Comment:</h4>
        <input type="text" value={comment} onChange={handleChange} />
        <button type="Submit">Submit Comment</button>
      </form>
    </section>
  );
}

export default InsertComment;
