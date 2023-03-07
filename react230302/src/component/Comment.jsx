import React from "react";
import "../component/Comment.css";

const Comment = (props) => {
  return (
    <div className="wrapper">
      <div className="sm-box-item"></div>
      <div className="sm-box-item2">
        <span className="name-text">{props.name}</span>
        <span className="comment-text">{props.comment}</span>
      </div>
    </div>
  );
};

export default Comment;
