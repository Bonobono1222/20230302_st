import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// console.log()가 두 번 뜨는 것은 StrictMode로 인한 정상적인 상황
// 거슬린다면 index.js에서 출력할 파일을 감싸고 있는 <StrictMode></StrictMode>를 제거하면 된다.
