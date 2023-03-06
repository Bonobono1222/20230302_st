// Object Shorthand Assignment
// ES6에서는 객체를 반환할 때 불필요한 반복을 하지 않아도 된다.
let name = 'Jihye';
let age = 10;

let parson = {
  name : name,
  age : age
}
console.log(parson);

let parson2 = {
  name,
  age
}
console.log(parson2);
// 단축 표기법(키와 벨류값이 일치할 때만 사용 가능)
// 키와 키값에 들어가는 변수의 이름이 같다면, 생략하고 한 번만 작성해도 된다.
// 키 이름으로 선언된 값이 있다면 벨류가 생략되어도 값을 매칭 해준다.