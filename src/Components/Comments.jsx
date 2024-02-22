import { useState } from "react";

const Comment = ({ data: comment, setCommentsData }) => {
  const [reply, setReply] = useState("");
  const [viewAll, setViewAll] = useState(false);

  // Create new Comment
  function createComment(msg) {
    return {
      message: msg,
      user: "user 1",
      upVote: 0,
      downVote: 0,
      commentTime: new Date(),
      commentId: Math.floor(Math.random() * 10000),
      replies: [],
    };
  }

  // Add New Comment
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setReply(false);
    comment.replies.unshift(createComment(e.target.message.value));
    setCommentsData((prev) => [...prev]);
    setViewAll(true);
    e.target.message.value = null;
  };

  // Upvote Handler
  const upvoteHandler = (e) => {
    comment.upVote++;
    setCommentsData((prev) => [...prev]);
  };

  // Downvote Handler
  const downvoteHandler = () => {
    comment.downVote++;
    setCommentsData((prev) => [...prev]);
  };

  if (!comment) return null;

  return (
    <div className="comment">
      {/* This is a comment */}
      <div className={"commentCard"}>
        <p>
          {comment.message}
          <h5>{comment.commentTime.toISOString()}</h5>
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          <button onClick={upvoteHandler}>Upvote {comment.upVote}</button>
          <button onClick={downvoteHandler}>Downvote {comment.downVote}</button>
          <button
            onClick={() => {
              setReply(true);
            }}
          >
            Reply
          </button>
          {comment.replies.length > 0 && (
            <button onClick={() => setViewAll(!viewAll)}>
              {viewAll ? "Collapse" : `View All +${comment.replies.length}`}
            </button>
          )}
        </div>
      </div>

      {reply && (
        <form
          className={"form"}
          style={{ marginLeft: "50px" }}
          onSubmit={onSubmitHandler}
        >
          <input type="text" name="message" autoFocus />
          <button>Send</button>
          <button onClick={() => setReply(false)}>Cancel</button>
        </form>
      )}

      <div style={{ display: viewAll ? "block" : "none" }}>
        {/* Recursively iterating the comment */}
        {comment.replies.length >= 1 &&
          comment.replies.map((item) => {
            return (
              <Comment
                data={item}
                setCommentsData={setCommentsData}
                key={item.commentId}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Comment;
