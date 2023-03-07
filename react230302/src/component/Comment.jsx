import React from 'react'
import '../component/Comment.css'

const Comment = (props) => {
  return (
    <div className='sm-box'>
      <div className='sm-box-item'>
      </div>
      <div className='sm-box-item2'>
        <h1>{props.title}</h1>
        <span>{props.comment}</span>
      </div>
    </div>
  )
}

export default Comment