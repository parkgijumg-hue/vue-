/* -  구조분해 할당(Destructuring  Assingnment)

- 배열이나 객체의속성을 해체하여 그 값을 개별 변수에 담을 수 있다.



*/

let arr = [10, 20, 30, 40];
let [a1, a2, a3] = arr;

console.log(a1, a2, a3);
let p1 = { name: '홍길동', age: 20, gender: 'M' };
let { name: n, age: a, gender } = p1;
console.log(n, a, gender);
