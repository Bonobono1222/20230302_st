import React from "react";
import {useState} from 'react'
import '../component/State.css'

// 컴포넌트를 만들 때는 반드시 제일 앞 글자가 대문자여야 한다.
function State() {
  let user = 'Jihye';
  let [count, setCount] = useState(0);
  let [counter, setCounter] = useState([0,0,0]);
  let [title, setTitle]  = useState(['DW마카데미 503호','DW마카데미 502호','DW마카데미 501호']);
  // [초기값 변수, 값을 변경해주는 함수]
  // useState(0) 리엑트에서 변수처럼 자료를 보관할 수 있는 State문법
  // [](대괄호) Array자료형식-> 한곳에다가 여러가지 자료를 저장하고 싶을 때 사용
  let [bgColor, setbgColor] = useState('white');
  let changeBg = () => {
    let newBg = bgColor == 'white' ? 'skyblue' : 'white';
    setbgColor(newBg)
  }
  let [name, setName] = useState(['김지혜','김지혜','김지혜']);
  let [color, setColor] = useState(['green','red','blue']);

  // map함수가 array의 갯수만큼 return을 반복한다.
  // 매개변수(파라미터)를 만들어주면 함수 안의 파라미터가
  // array자료 안에 있는 데이터가 된다.
  // [1,2,3].map(function(num) {
  //   return console.log(num);
  // })

  let num = [1,2,3,4,5];
  // let newNum = num.map((num)=> num + 1);
  // // 변수 newNum에 num의 값들에 각각 +1 해서 담아준다.
  // console.log(num);
  // // 반환결과 > [1, 2, 3, 4, 5]
  // console.log(newNum);
  // // 반환결과 > [2, 3, 4, 5, 6]
  let newArr = num.map(function(element) {
    return element * 3
  });
  console.log(newArr);
  // 반환결과 > [3, 6, 9, 12, 15]

  for(let i = 0; i < num.length; i++) {
    num[i] = num[i] * 3;
  }
  console.log(num);
  // 반환결과 > [3, 6, 9, 12, 15]


  return (
    <div className="App" style={{backgroundColor:bgColor}}>
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

      {/* <div className="list">
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
      </div> */}

      {/* {
        ['green', 'red', 'blue'].map(function(a) {
          // 배열을 매개변수 a에 담음(map으로 배열을 돌려줌)
          return a.toUpperCase()
          // toUpperCase() -> 소문자를 대문자로 변경해줌
        })
      } */}

      {
        title.map(function(a, i) {
          {/*매개변수 a, 정수 i */}
          return (
            <div className="list" key={i}>
              {/*key값은 {i}*/}
              <h4 style={{color:"blue"}}>{title[i]}</h4>
              <div>
              <span onClick={() => {
              // 클릭하면
              let Copy = [...counter]
              // 변수 Copy에 배열 counter를 담아준다.
              // 원본 배열을 훼손하지 않기 위해 독립적인 카피본을 만들어준다.
              Copy[i] += 1;
              // Copy[i]는 Copy[i] + 1
              setCounter(Copy)}}>👍 + {counter[i]}</span>
              {/*setCounter(Copy) -> 반환하는 값*/}
              </div>
              <p>안녕안녕~ 나는 {name[i]}야.</p>
              {/* 정수 i가 돌고 있으니 배열 name에 i를 넣어줌 */}
              <p>컬러{color[i]}</p>
              {/* 정수 i가 돌고 있으니 배열 color에 i를 넣어줌 */}
            </div>
          )
        })
      }

        <button onClick={()=>{
          let copy = [...title];
          copy[2] = "하지만 오늘은 바람이 불어요";
          setTitle(copy);
          }}>글 제목 변경</button>

         <button onClick={() => {
          // 버튼을 틀릭했을 때
          let Copy = [...title];
          Copy = Copy.sort();
          // sort() -> 오름차순 정렬
          setTitle(Copy);
          }}>글 정렬</button>

          <button onClick={() => {
            //setbgColor(bgcolor === "" ? "skyblue" : "");
            //setbgColor의 bgcolor 색이 없는게 맞으면 skyblue색을 넣어주고 색이 들어가 있으면 없애라.
            changeBg()
          }}>배경색 변경</button>

          <button onClick={() => {
            //버튼을 클릭 했을 때
            let Copy2 = [...name];
            // Copy2에 배열 name을 담고
            Copy2 = ['박수정','김수이','김지우']
            // Copy2에 새로운 배열 값을 담아준다.
              setName(Copy2);
              // 반환할 값 -> Copy2
          }}>이름변경</button>

          <button onClick={()=> {
             //버튼을 클릭 했을 때
            let Copy3 = [...color];
            // Copy3에 배열 color을 담고
            Copy3 = ['GREEN','RED','BLUE']
            // Copy3에 새로운 배열 값을 담아준다.
            setColor(Copy3);
            // 반환할 값 -> Copy3
          }}>대문자로 변경</button>
    </div>
  );
}

export default State;
// 파일을 내보내려면 선언 해주어야 한다.