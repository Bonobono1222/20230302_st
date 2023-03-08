import React from "react";
import CommentList from "./CommentList";
// import "../component/Comment.css";

const styles = {
  wrapper: {
    width: '800px',
    height: '70px',
    display: 'flex',
    border: '1px solid rgb(185, 231, 231)',
    borderRadius: '15px',
    margin: '8px',
    padding: '8px'
  },

  smBoxItem: {
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2021/11/19/03/39/child-6807976_960_720.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    objectFit: 'cover',
    overflow: 'hidden'
  },

  smBoxItem2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  nameText: {
    fontWeight: 'bold',
    fontSize: '18px',
    paddingLeft: '10px'
  },

  commentText: {
    fontSize: '15px',
    paddingLeft: '10px'
  },

  delBtn: {
    width: '50px',
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '15px',
    backgroundColor: 'rgb(33, 136, 139)',
    color: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer'
  }
  // 스타일링 변수를 만들어서 css파일 연결 안 하고 스타일링 불러오기

}
// style을 css연결 안 하고 불러오기
const Comment = (props) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.smBoxItem}></div>
      <div style={styles.smBoxItem2}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
      <button onClick={props.onDelete} style={styles.delBtn}>삭제</button>
      {/*버튼을 클릭 했을 때 CommentList.jsx에 있는 onDelete를 받아온다.*/}
    </div>
  ); 
};

export default Comment;
