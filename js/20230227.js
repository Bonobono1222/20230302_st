const days = ["월요일", "화요일"];

days.push("수요일", "목요일", "금요일", "토요일", "일요일");
// push(): 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환

days.pop();
days.pop();
days.pop();
// pop(): 배열의 마지막 요소를 제거한 후, 제거한 요소를 반환
// 배열의 마지막 요소를 제거

const days2 = ["금요일", "토요일", "일요일"];

const result = days.concat(days2);
// concat(): 두 개의 문자열을 하나의 문자열로 만들어주는 역활을 하는 함수

const 휴일 = result.slice(5);
// slice(): 아무리 많이 호출해도 원본 배열의 값은 절대 건드리지 않는다.(원본 보존)
// slice(5) -> 6번째 배열부터 반환
//myPrint(휴일);
//myPrint(result); //(원본 보존)

const result1 = result.splice(0, 2);
// slice(): 배열로 부터 특정 범위를 복사한 값들을 담고 있는 새로운 배열을 만드는데 사용
// 주의할 점은 첫번째 인자로 넘어온 시작 인덱스가 가리키는 값은 포함하지만,
// 두번째 인자로 넘어온 종료 인덱스가 가리키는 값은 포함하지 않는다.
//myPrint(result1);
const result2 = result.splice(0, 5);
//myPrint(result2);
//myPrint(result); // 없음(원본 훼손)

const arr = [1, 2, 3, 4, 5];
const output = arr.map((a) => a + 1);
// map(): 특정 숫자를 곱하거나, 애플리케이션에 필요한 다른 작업을 수행하는 등
// 요소에 어떤 변경 사항을 적용하는 데 사용
// <arr에 있는 배열 값들을 각각 a로 담음> a 각각에 +1을 해서 변수 output에 담아라
myPrint(output); // -------(1)

// const output = arr.map(function (a) {
//   return a + 1;
// })
// myPrint(output); // -------(2)

// function plus1(a) {
//   return a + 1;
// }
// const output = arr.map(plus1);
// myPrint(output); // -------(3)

// const nums = [1,2,3,4,5];
// const out = nums.map(b => b * 2);
// myPrint(out);

const 객체배열 = [
  { count: 1 },
  { count: 2 },
  { count: 3 },
  { count: 4 },
  { count: 5 },
]; // 객체들이 들어있는 객체배열

const output2 = 객체배열.map((c) => c.count + 1);
// 객체배열의 안에 값을 쓰려면 c.count처럼 .을 찍고 사용하려는 객체를 불러와야 함
console.log(output2);

const 학생기록 = [
  { name: "김수이", score: 80 },
  { name: "최수이", score: 100 },
  { name: "박수이", score: 70 },
  { name: "정수이", score: 90 },
  { name: "이수이", score: 60 },
];

const output3 = 학생기록.map(function (d) {
  // map()은 값을 재정비 해서 반환하는 것(false값도 가져옴)이라 length는 같음
  if (d.score >= 80)
  return d.name;
});

console.log(output3);

const output4 = 학생기록.filter(function (d) {
  // filter()는 조건에 맞는(true값만 가져옴) 값만 뽑아오기 때문에 length가 바뀜
  if (d.score >= 80)
  return true;
});
// 축약 -> const output4 = 학생기록.filter(d => d.score >= 80);
console.log(output4);

const a = [1,2,3,4,5];
const b = [...a,6,7,8,9];
// ...문자를 사용하여 spread 연산자 사용
// 기존의 a배열을 건드리지 않고 새로운 항목을 추가적으로 넣음
myPrint(b);

const 문자열 = 'student';
// 자바스크립트는 문자열도 배열처럼 인덱싱을 해줌
myPrint(문자열[1]);
// 결과: t

const output5 = [...문자열];
myPrint(output5);
// 결과: s,t,u,d,e,n,t

const c = [...a]; // [1,2,3,4,5]가 들어감
c[0] = 100;
myPrint(c);
// 결과: 100,2,3,4,5
myPrint(a);
// 결과: 1,2,3,4,5

const Arr = [1, 2, 3];
// const d = Arr[0];
// const e = Arr[1];
// const f = Arr[2];
const [d,e,f] = Arr;
const [x, , z] = Arr;
console.log(x,z);
// 결과: 1 3
// 디스트럭처링 Destructuring(비구조화, 파괴)

const [a1, b1, c1 = 5, d1 = 4] = Arr;
console.log(a1, b1, c1, d1);
// 결과: 1 2 3 4
// 값을 줘도 초기값으로 반환

const [x1, ...y1] = Arr;
console.log(x1,y1);
// 결과: 1 ▶ (2) [2, 3]
// rest(): 함수의 파라미터에 쓰여서 뒤에 남는 요소들을 배열로 받아준다.
// 요소를 하나씩 모두 전개시킬 때는 Spread의 역할을,
// 나머지 요소를 묶을 때는 Rest의 역할이라고 생각하면 편합니다.
// rest 파라미터는 대응시키고 남은 인수들을 배열로 만들어 주기 때문에,
// 처음이나 중간에 올 수 없고, 마지막에만 올 수 있다.

const obj = {name: 'Smith', age: 25}
const {age, name} = obj
console.log(name, age);
// 결과: Smith 25

function myPrint(arr) {
  const p = document.createElement("p");
  // p를 만들어서 변수 p에 담음
  p.innerHTML = arr;
  // arr를  p.innerHTML에 담음
  document.body.appendChild(p);
  // body 요소의 끝에 붙임 appendChild(여기서 들어가는거: 새로운 단락 요소)
}
