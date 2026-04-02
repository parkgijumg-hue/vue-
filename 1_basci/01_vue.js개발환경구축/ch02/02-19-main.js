// default export는 이름 없이 가져오고, named export는 {}로 가져온다
import getBase, { add } from './02-19-module.js';
// add 함수 실행 결과 출력 (100 + 4)
console.log(add(4));
// 기본(base) 값 출력
console.log(getBase());
