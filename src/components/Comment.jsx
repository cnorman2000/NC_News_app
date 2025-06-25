const Comment = ({ comment }) => {
  return (
    <section className="commentlist">
      <h6>Author: {comment.author}</h6>
      <p>Comment: {comment.body}</p>
      <p>Published: Not Ready</p>
      <p>UpVotes: {comment.votes}</p>
    </section>
  );
};

export default Comment;
