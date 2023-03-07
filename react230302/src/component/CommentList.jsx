import React from "react";
import App from "../App";
import Comment from "./Comment";

const comments = [
  {
    name: "김라라",
    comment: "안녕하세요~ 오늘 출석합니다.",
  },
  {
    name: "박미미",
    comment: "출첵출첵!!",
  },
  {
    name: "이수수",
    comment: "출석합니다~ 오늘은 날씨가 괜찮네요~",
  },
  {
    name: "햄찌순",
    comment: "안녕하세요~ 해피햄찌데이~!",
  },
];

function CommentList() {
  return (
    <div>
      {comments.map((comment, i) => {
        // comments 배열을 map()가 돌면서
        return (
          <Comment name={comment.name} comment={comment.comment} key={i} />
        );
      })}
    </div>
  );
}

export default CommentList;
