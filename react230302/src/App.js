/* eslint-disable */
// 경고창 안 뜨게 해줌
import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function App() {
  let user = 'Jihye';
  let [count, setCount] = useState(0);
  let [counter, setCounter] = useState(0);
  let [title, setTitle]  = useState(['DW마카데미 503호','DW마카데미 502호','DW마카데미 501호']);
  // [초기값 변수, 값을 변경해주는 함수]
  // useState(0) 리엑트에서 변수처럼 자료를 보관할 수 있는 State문법
  // [](대괄호) Array자료형식-> 한곳에다가 여러가지 자료를 저장하고 싶을 때 사용
  
  return (
    <div className="App">
      <h1 style={{color:"skyblue"}}>Hello, {user}!</h1>
      <p>This is a React App</p>

        <div>
          <button onClick={()=>{
          //버튼 클릭하면
            setCount(count + 1)
            // setCount함수를 호출해서 count값을 +1 해라
          }}>Click Me</button>
        </div>
        <p>클릭 시 + {count}</p>

      <div className="list">
        <h4 style={{color:"blue"}}>{title[0]}</h4>
        <div>
        <span onClick={()=>{
          setCounter(counter + 1)
        }}>👍 {counter}</span>
        </div>
        <p>안녕안녕~ 나는 김지혜야.</p>
      </div>
      <button onClick={()=>{
          let copy = [...title];
          copy[0] = "리액트 너무 재밌어요!";
          setTitle(copy);
          }}>글 제목 변경</button>

      <div className="list">
        <h4 style={{color:"pink"}}>{title[1]}</h4>
        <div>
        <span onClick={()=>{
          setCounter(counter + 1)
        }}>👍 {counter}</span>
        </div>
        <p>안녕안녕~ 나는 김지혜야.</p>
      </div>
      <button onClick={()=>{
          let copy = [...title];
          // ...문자를 사용하여 spread 연산자 사용
          // 변수 copy에 title의 Array자료(여러자료)가 들어감
          copy[1] = "오늘은 비가 오지 않아요";
          setTitle(copy);
          }}>글 제목 변경</button>

      <div className="list">
        <h4 style={{color:"skyblue"}}>{title[2]}</h4>
        <div>
        <span onClick={()=>{
          setCounter(counter + 1)
        }}>👍 {counter}</span>
        </div>
        <p>안녕안녕~ 나는 김지혜야.</p>
      </div>
        <button onClick={()=>{
          let copy = [...title];
          copy[2] = "하지만 오늘은 바람이 불어요";
          setTitle(copy);
          }}>글 제목 변경</button>

         <button onClick={() => { 
          let Copy = [...title];
          Copy = Copy.sort();
          // sort() -> 오름차순 정렬
          setTitle(Copy);
          }}>글 정렬</button>
    </div>
  );
}

export default App;
