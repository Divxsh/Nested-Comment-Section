import { useState } from "react";
import Comments from "./Comments";
import nestedComments from "../Constants/data";

const CommentBox = () => {
  const [commentsData, setCommentsData] = useState(nestedComments);
  const [order, setOrder] = useState({
    commentTime: "asc",
    upVote: "asc",
    downVote: "asc",
  });

  // Add new comments
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setCommentsData([
      ...commentsData,
      {
        message: e.target.message.value,
        user: "user 1",
        upVote: 0,
        downVote: 0,
        commentTime: new Date(),
        commentId: Math.floor(Math.random() * 10000),
        replies: [],
      },
    ]);
    e.target.message.value = null;
  };

  const sortHadler = (type) => {
    let sortedData = [];
    const orderType = order[type];
    setOrder((prev) => ({
      ...prev,
      [type]: prev[type] === "asc" ? "dsc" : "asc",
    }));
    if (orderType === "asc") {
      sortedData = commentsData.sort((a, b) => a[type] - b[type]);
    } else {
      sortedData = commentsData.sort((a, b) => b[type] - a[type]);
    }
    setCommentsData([...sortedData]);
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmitHandler}>
        <input type="text" name="message" placeholder="Add Comment" />
        <button>Send</button>
      </form>

      <div className="buttonGroup">
        <button onClick={() => sortHadler("commentTime")}>
          Sort by Date : {order.commentTime.toUpperCase()}
        </button>
        <button onClick={() => sortHadler("upVote")}>
          Sort by Upvote : {order.upVote.toUpperCase()}
        </button>
        <button onClick={() => sortHadler("downVote")}>
          Sort by Downvote : {order.downVote.toUpperCase()}
        </button>
      </div>

      <div className="comment-box">
        {commentsData.map((item) => {
          return (
            <Comments
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

export default CommentBox;
