/* eslint-disable */
// 경고창 안 뜨게 해줌
import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import State from './component/State';


function App() {
  let num = 0;
  // 그냥 변수에 담은 값은 렌더링이 될 때마다 초기화 된다.
  const [count, setCount] = useState(0)
  // 리액트에서 중요한 자료를 다룰 때는 state를 활용
  // state는 값이 반영 되는게 한 박자씩 느림(다른 함수 처리 후에 실행되서)
  // [초기값, 초기값을 바꿀 수 있는 set함수]
  let increase = () => {
    num = num + 1;
    setCount(count + 1)
    console.log("num", num, "state", count);
  }

  return (
    <div className='App'>
      {/* <State></State> */}
      <h1>{count}</h1>
      <button onClick={increase}> +1 </button>
    </div>
  )
}

export default App;
