import React from 'react'
import '../component/Box.css'

// 컴포넌트 생성 시 주의사항!
// ** 컴포넌트의 이름은 반드시 대문자로 시작해야 한다. **
// 리액트는 태그가 대문자로 시작하는지 여부로 컴포넌트와 일반 HTML 태그를 구별한다.
// 소문자로 시작하면 리액트는 HTML 태그로 분류하기 때문에 에러가 발생할 수 있다.
// 컴포넌트를 보통 기능별로 나누어서 생성한다.(테스트 또는 유지보수 시 용이)
// 하나의 컴포넌트에 여러기능을 담기 보다는 한 컴포넌트에는 하나의 기능만 있는게 좋다.(재활용때 용이)
// 컴포넌트를 나누는 절대적인 기준은 없다(본인만의 기준을 만들어 사용하는게 좋음)

const Box = (props) => {
  return (
    <div className='box'>
      <h1 className='blue'>Box Component</h1>
      <h2>Box{props.num}</h2>
      <h3>{props.name}</h3>
    </div>
  )
}

export default Box