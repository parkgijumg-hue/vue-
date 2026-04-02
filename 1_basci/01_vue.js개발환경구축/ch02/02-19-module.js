// base: 모듈 내부에서 사용하는 기준값(초기값 100)
let base = 100;

// 1번: 함수 선언 후 export 하는 방식(참고용)
// const add = (x) => base + x;
// const multiply = (x) => base * x;
// export { add, multiply };

// 2번: 선언과 동시에 export 하는 방식(참고용)
// export const add = (x) => base + x;
// export const multiply = (x) => base * x;

// 3번: 실제 사용하는 방식
// add: x에 base를 더한 값 반환
const add = (x) => base + x;
// multiply: x에 base를 곱한 값 반환
const multiply = (x) => base * x;
// getBase: 현재 base 값을 그대로 반환
const getBase = () => base;
// named export: {}로 가져오는 방식
export { add, multiply };
// default export: 이름 없이 하나만 가져오는 방식 -> import 부분에서 이름을 마음대로 변경할 수 있음
export default getBase;
