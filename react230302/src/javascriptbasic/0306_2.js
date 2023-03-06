// 디스트럭처링 Destructuring(비구조화, 파괴)
// 구조를 분해 한다.
// 객체를 분해해서 값을 가져온다.

let parson = {
  name : 'Jihye',
  age : 30
}

// name이랑 age라는 값을 변수로 뽑아서 콘솔로그

// 옛날 문법
// let name = parson.name
// let age = parson.age
// let name1 = parson['name']
// let age1 = parson['age']
// console.log(name, age);
// console.log(name1, age1);

// 단축 표기법
// 변수 선언 후 먼저 객체를 써놓고 그 안에 내가 가져오고 싶은 key값을 입력
// parson이라는 객체에서 name과 age라는 key값을 분해해서 각각 let으로 선언한 변수로 만든다
let {name, age} = parson
console.log(name, age)

// 어떤 객체 안에서 가져오고 싶은 key값을 맨션하면 그 key값을 이름으로 변수 생성
// 그 변수 안에 key값이 할당된다.
// 이 문법은 array[배열]에서도 동일하게 적용된다.

// Array
let arr = [1,2,3,4,5]
// let [a,b] = arr
// console.log(a, b)
// a와 b라는 변수가 생성되고 a랑 b에는 배열의 순서대로 값이 들어감
// a는 배열의 0번째 값, b는 배열의 1번째 값

let [a,b,...rest] = arr
console.log(rest)
// 배열 안의 나머지값 가져오기
// 이름은 상관 없음 하지만 rest로 사용해주는게 좋다
// 변수가 가장 마지막에 위치하여야 한다.
// 구조 분해 할당

// parson이라는 객체를 그대로 복사
// ...사용 시 객제의 깊은 복사(deep copy)
// 깊은 복사 시 기존 객체가 그대로 복사되어서 새로운 객체가 생성된다.

let parson2 = {...parson}
console.log(parson)
console.log(parson2)
// 콘솔로그에 똑같이 뜨지만 둘은 서로 다른 객체이다.

// ...없이 얕은 복사(shallow copy)

let parson3 = parson
console.log(parson3)
// ...없이 값을 할당하는 경우에는 새로운 객체를 생성하는게 아니라 기존 객체의 주소 값만 복사해 옴
// 깊은 복사를 해오지 않으면 객체는 하나만 있고 그 객체를 참조하는 객체가 2개일 뿐인것(새로운 객체 생성x)
console.log(parson == parson3)
console.log(parson == parson2)
// true (얕은 복사 시 객체 주소만 참조해 오기에 true)
// false 반환 (깊은 복사 시 새로운 객체를 생성하기에 서로 다른 객체라 false)

let c = [1,2,3]
let d = [...c,4]
console.log(d)
// [1, 2, 3, 4] 반환

let e = [...c,...d]
console.log(e)
// [1, 2, 3, 1, 2, 3, 4] 반환




