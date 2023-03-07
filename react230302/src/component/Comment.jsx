import React from "react";
// import "../component/Comment.css";

  const stylesWrapper = {
    width: '800px',
    height: '70px',
    display: 'flex',
    border: '1px solid #ccc',
    borderRadius: '15px',
    margin: '8px',
    padding: '8px'
  };

  const stylesSmBoxItem = {
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
  };

  const stylesSmBoxItem2 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const stylesNameText = {
    fontWeight: 'bold',
    fontSize: '18px',
    paddingLeft: '10px'
  };

  const stylesCommentText = {
    fontSize: '15px',
    paddingLeft: '10px'
  }

const Comment = (props) => {
  return (
    <div className="wrapper" style={stylesWrapper}>
      <div className="sm-box-item" style={stylesSmBoxItem}></div>
      <div className="sm-box-item2" style={stylesSmBoxItem2}>
        <span className="name-text" style={stylesNameText}>{props.name}</span>
        <span className="comment-text" style={stylesCommentText}>{props.comment}</span>
      </div>
    </div>
  );
};

export default Comment;
