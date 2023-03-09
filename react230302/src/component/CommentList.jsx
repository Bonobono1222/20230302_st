import React from 'react';
import Comment from './Comment';
import { useState } from 'react';

const comments = [
  {
    name : "김수수",
    comment : "안녕하세요~ 출석합니다!"
  },
  {
    name : "햄순이",
    comment : "출석합니다! 안녕하세요~"
  }, 
  {
    name : "김햄돌",
    comment : "안녕하세요!"
  }
]

const style2 = {
  addDataBox: {
    width: '550px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '10px'
  },

  inputStyle: {
    height: '25px',
    border: '1px solid #ccc',
  },

  addBtn: {
    width: '90px',
    height: '25px',
    backgroundColor: 'rgb(33, 136, 139)',
    color: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer'
  }
}

function CommentList() {

   const [CommentList , setCommentList] = useState(comments)
   const [name , setName] = useState('');
   const [content , setContent] = useState('');
   
   const deleteComment = (index) => {
     const newCommentList = [...CommentList];
     newCommentList.splice(index , 1)
     setCommentList(newCommentList)
   }
  //  const addComment = () => {
  //   const add = {name : '햄찡' , comment : '다들 안녕하세요~! 아침은 드셨어요?'}
  //   setCommentList([add,...CommentList])
  //   // 스테이트 변경함수
  // }

  const addComment = () => {
    // 조건: name, content value 값이 없을 때
    name === '' || content === '' ? alert('이름과 댓글을 입력하세요.') : (
      (() => {
        const add = {name : name , comment : content}
        setCommentList([add,...CommentList])
        // 스테이트 변경함수
        setName('')
        setContent('')
        //state변경 함수에 빈문자열을 넣어서 input 에 작성된 내용을 초기화 시켜준다
      })() // 끝에 ()는 즉시 실행하라고 붙여줌
    )
  }
    
  return (
    <div>
      {
        CommentList.map((comment, i)=>{
          return (
            <div>
               <Comment name={comment.name} comment={comment.comment} key={i} onDelete={()=>deleteComment(i)}> 
               </Comment>
            </div>
          )
        })
      }
     
      {/* onchange 이벤트는 input 요소에서 값이 변경될때 발생
       그때 발생한 이벤트를 매개변수 e  */}
       <div style={style2.addDataBox}>
       이름 : <input style={style2.inputStyle} type="text" value={name} onChange={(e) => setName(e.target.value)} />
       댓글 : <input style={style2.inputStyle} type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
      
      <button style={style2.addBtn} onClick={addComment}>Comment +</button>
      </div>

    </div>
  )
}

export default CommentList;