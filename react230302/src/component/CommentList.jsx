import React from "react";
import App from "../App";
import Comment from "./Comment";
import { useState } from "react";
// useState를 쓰려면 적어야 하는 구문

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

const styles2 = {
  addBtn: {
    width: '100px',
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
    backgroundColor: 'rgb(33, 136, 139)',
    color: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

function CommentList() {
  const [commentList, setConmmentList] = useState(comments);
  // 초기값 commentList에 comments의 값들을 넣어준다.
  const deletComment = (index) => {
    // deletComment라는 함수를 만들어주고
    // 여기서 매개변수값 index를 사용 하기 위해 하단에 onDelete={() => deletComment(i)}를 넣어줌
    // button에 있는 onClick={props.onDelete}과 onDelete={() => deletComment(i)}가 이어짐
    const newCommentList = [...commentList];
    // newCommentList라는 변수를 선언해주고 CommentList의 값들을 넣어준다.
    newCommentList.splice(index, 1);
    setConmmentList(newCommentList);
  }
  return (
    <div>
      {commentList.map((comment, i) => {
        // comments 배열을 map()가 돌면서<comment라는 매개변수1에 comments값들이 담김, i는 매개변수 2 정수>
        // (03.08)폼을 삭제하기 위하여 comments를 commentList로 바꿔줌
        return (
          <Comment name={comment.name} comment={comment.comment} key={i} onDelete={() => deletComment(i)}/>
        );
      })}
      <button style={styles2.addBtn}>Comment +</button>
    </div>
  );
}

export default CommentList;
