import { useParams } from "react-router-dom";
import fetchComments from "../utils/FetchComments";
import Comment from "./Comment";
import { useState, useEffect } from "react";
import AddComment from "./InsertComment";
import InsertComment from "./InsertComment";

function CommentList() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    const asyncGetComments = async () => {
      const { comments } = await fetchComments(article_id);

      setComments([...comments]);
    };

    asyncGetComments();
  }, []);
  return (
    <section className="commentlist">
      <h7>Comments</h7>
      <InsertComment setComments={setComments} comments={comments} />
      {comments.map((comment) => (
        <Comment key={comment.comment_id} comment={comment} />
      ))}
    </section>
  );
}

export default CommentList;
