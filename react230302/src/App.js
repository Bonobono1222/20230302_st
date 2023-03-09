/* eslint-disable */
// 경고창 안 뜨게 해줌
import logo from "./logo.svg";
// import './App.css';
import { useState } from "react";
import State from "./component/State";
import Box from "./component/Box";
import Comment from "./component/Comment";
import "../src/component/State.css";
import "../src/component/Box.css";
// import "../src/component/Comment.css";
import CommentList from "./component/CommentList";

// State라는거에 반응하기 때문에 react이다.
// 리액트는 변수 값이 업데이트 됐다고 UI를 재렌더링 하지 않는다.
// 리액트는 State가 변경 되었을 때만 UI를 재렌더링 한다.
// 항상 값을 변경할 때는 useState를 사용
// useState를 import => State를 사용하기 위해서 react 에서 useState를 데려온다.
// useState => 리액트에서 제공하는 함수 중 하나(훅)
const style = {
  backgroundImage: {
  width: '300px',
  height: '300px',
  backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/02/10/07/59/fox-7780326__340.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  objectFit: 'cover',
  overflow: 'hidden',
  marginTop: '10px'
  },

}


function App() {
  return (
    <div className="App">
      <CommentList/>
      <div style={style.backgroundImage}>
      </div>
     </div>
  );
}

export default App;
