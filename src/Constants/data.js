const nestedComments = [
  {
    message: "Parent 1",
    user: "user 1",
    upVote: 0,
    downVote: 0,
    commentTime: new Date("2023-07-28T12:00:00"),
    commentId: 101,
    replies: [
      {
        message: "Parent 1 : Child 1",
        user: "user 2",
        upVote: 0,
        downVote: 0,
        replies: [],
        commentTime: new Date("2023-07-28T13:00:00"),
        commentId: 111
      },
      {
        message: "Parent 1 : Child 2",
        user: "user 3",
        upVote: 0,
        downVote: 0,
        replies: [],
        commentTime: new Date("2023-07-29T12:00:00"),
        commentId: 112
      }
    ]
  },
  {
    message: "Parent 2",
    user: "user 2",
    upVote: 0,
    downVote: 0,
    replies: [],
    commentTime: new Date("2023-07-28T11:30:00"),
    commentId: 102
  },
  {
    message: "Parent 3",
    user: "user 3",
    upVote: 0,
    downVote: 0,
    replies: [],
    commentTime: new Date("2023-07-27T12:00:00"),
    commentId: 103
  },
  {
    message: "Parent 4",
    user: "user 4",
    upVote: 0,
    downVote: 0,
    replies: [],
    commentTime: new Date("2023-07-28T14:00:00"),
    commentId: 104
  }
];

export default nestedComments;
