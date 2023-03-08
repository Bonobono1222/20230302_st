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

function App() {
  let num = 0;
  // State값이 업데이트 될 때 마다 functoin App을 다시 실행 시키면서 변경된 UI를 업데이트한다.
  // 변수는 값을 저장하지 않고 함수가 호출 될 때 마다 초기화된다.
  const [count, setCount] = useState(0);
  // ** 리액트에서 중요한 자료를 다룰 때는 state를 활용 **
  // State의 값 반영이 한 박자씩 늦는 이유는?
  // State값이 변경되어 함수가 호출 될 때 바로 변경 값을 실행하는게 아니라
  // 변경 되어야 하는 set함수들을 싹 모아서 함수가 끝나고 나서 한 번에 처리하기 때문이다.(비동기적)
  // *이 점을 알고 있어야 한다*
  // State는 기존 값을 잃어버리지 않고 기억하고 있다.
  // [초기값, 초기값을 바꿀 수 있는 set함수]
  // useState함수는 아이템이 2개 들어있는 배열(Array)을 리턴한다.
  // State를 변수처럼 다루면 안 되고 값을 변경 할 때는 항상 변경함수를 호출하고 값을 그 안에 집어 넣어야 한다.
  let increase = () => {
    num = num + 1;
    setCount(count + 1);
    console.log("num", num, "state", count);
  };
  let num1 = [1, 2, 3, 4];
  let name1 = ["KimJihye", "KimSoojin", "KimHajin", "KimHun"];

  // console.log 두 개 찍히는 이유는?
  // App.js에 작성한 내용은 index.js를 거쳐서 'root'라는 아이디 값이 div에 그려진다.
  // StrictMode => 리액트로 개발할 때, 잠재적인 문제가 있는지 검사해주는 모드(스스로 문제점을 찾아주는건 아니다)
  // index.js => index.html파일과 App.js파일을 연결 해주는 역활

  let name2 = ["김라라", "박미미", "이수수", "햄찌순"];
  let comment1 = [
    "안녕하세요~ 오늘 출석합니다.",
    "출첵출첵!!",
    "출석합니다~ 오늘은 날씨가 괜찮네요~",
    "안녕하세요~ 해피햄찌데이~!",
  ];

  return (
    <div className="App">
      
      {/*<Box num="1" name="KimJihye"></Box>
     <Box num="2" name="KimSoojin"></Box>
     <Box num="3" name="KimHajin"></Box>
    <Box num="4" name="KimHun"></Box>*/}
      {
        // name1.map(function(a, i) {
        //   //변수.map(콜백함수(매개변수1,매개변수2) { return작성 })
        //   // 첫번째 매개변수는 값들을 가져오고, 두번째 매개변수는 0부터 증가하는 정수
        //   return (
        //     <div className='box' key={i}>
        //       <h1 className='blue'>Box Component</h1>
        //       <h2>Box{num1[i]}</h2>
        //       <h3>{name1[i]}</h3>
        //     </div>
        //   )
        // })
        // <Comment name="김라라" comment="안녕하세요~ 오늘 출석합니다."></Comment>
        // <Comment name="박미미" comment="출첵출첵"></Comment>
        // <Comment name="이수수" comment="출석합니다~ 오늘은 날씨가 괜찮네요~"></Comment>
        // <Comment name="햄찌순" comment="안녕하세요~ 해피햄찌데이~!"></Comment>
        // name2.map(function(a, i) {
        //   return (
        //     // <div className='sm-box'>
        //     //   <div className='sm-box-item'>
        //     //   </div>
        //     //   <div className='sm-box-item2' key={i}>
        //     //     <h1>{name2[i]}</h1>
        //     //     <span>{comment1[i]}</span>
        //     //   </div>
        //     // </div>
        //     <Comment name = {name2[i]}
        //       comment = {comment1[i]} />
        //   )
        // })
        <CommentList />
        
      }
    </div>
  );
}

export default App;
